from django.contrib import admin
from django.http import JsonResponse
from django.urls import include, path


def root_view(_request):
    return JsonResponse(
        {
            'message': 'TaskFlow backend is running',
            'endpoints': ['/api/register', '/api/login', '/api/tasks', '/admin/'],
        }
    )

urlpatterns = [
    path('', root_view, name='root'),
    path('admin/', admin.site.urls),
    path('api/', include('users.urls')),
    path('api/', include('tasks.urls')),
]
