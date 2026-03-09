import os
import sys
from pathlib import Path

import django

BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BASE_DIR))

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from django.contrib.auth import get_user_model  # noqa: E402


def main():
    username = os.getenv('ADMIN_USERNAME')
    email = os.getenv('ADMIN_EMAIL', 'admin@example.com')
    password = os.getenv('ADMIN_PASSWORD')

    if not username or not password:
        print('Skipping admin bootstrap: ADMIN_USERNAME or ADMIN_PASSWORD missing.')
        return

    user_model = get_user_model()
    if user_model.objects.filter(username=username).exists():
        print(f'Admin user "{username}" already exists.')
        return

    user_model.objects.create_superuser(username=username, email=email, password=password)
    print(f'Admin user "{username}" created.')


if __name__ == '__main__':
    main()
