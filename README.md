# TaskFlow - Full Stack Task Manager

## Step 1 - Project folder structure

```text
Codveda Project/
├── backend/
│   ├── core/
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── test_settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── tasks/
│   │   ├── migrations/
│   │   │   ├── __init__.py
│   │   │   └── 0001_initial.py
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── users/
│   │   ├── migrations/
│   │   │   └── __init__.py
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── .env.example
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── TaskForm.js
│   │   │   └── TaskItem.js
│   │   ├── pages/
│   │   │   ├── About.js
│   │   │   ├── Contact.js
│   │   │   ├── Dashboard.js
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   └── package.json
├── .gitignore
└── README.md
```

## Step 2 - Backend implementation

- Django + DRF backend with JWT authentication using `djangorestframework-simplejwt`.
- Registration endpoint: `POST /api/register`
- Login endpoint: `POST /api/login`
- Task CRUD endpoints (protected):
  - `GET /api/tasks`
  - `POST /api/tasks`
  - `PUT /api/tasks/{id}`
  - `DELETE /api/tasks/{id}`
- Task endpoints use a DRF `ModelViewSet` and automatically scope tasks to the logged-in user.

### Example API requests

Register:

```bash
curl -X POST http://127.0.0.1:8000/api/register \
  -H "Content-Type: application/json" \
  -d '{"username":"isaac","email":"isaac@example.com","password":"securePass123"}'
```

Login:

```bash
curl -X POST http://127.0.0.1:8000/api/login \
  -H "Content-Type: application/json" \
  -d '{"username":"isaac","password":"securePass123"}'
```

Create task:

```bash
curl -X POST http://127.0.0.1:8000/api/tasks \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"title":"Finish internship project","description":"Implement backend and frontend","completed":false}'
```

Get tasks:

```bash
curl -X GET http://127.0.0.1:8000/api/tasks \
  -H "Authorization: Bearer <ACCESS_TOKEN>"
```

Update task:

```bash
curl -X PUT http://127.0.0.1:8000/api/tasks/1 \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"title":"Finish internship project","description":"Submitted","completed":true}'
```

Delete task:

```bash
curl -X DELETE http://127.0.0.1:8000/api/tasks/1 \
  -H "Authorization: Bearer <ACCESS_TOKEN>"
```

## Step 3 - Frontend implementation

- React app with React Router and Axios.
- Pages: Home, About, Contact, Login, Register, Dashboard.
- Components: Navbar, TaskForm, TaskItem.
- JWT tokens stored in `localStorage`.
- Axios interceptor adds `Authorization` header and handles refresh token flow.

## Step 4 - Database schema

### User (Django built-in auth model)
- `id`
- `username`
- `email`
- `password` (hashed)

### Task (`tasks_task`)
- `id`
- `user` (foreign key -> user)
- `title`
- `description`
- `completed`
- `created_at`

## Step 5 - Run instructions

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Create PostgreSQL DB and update .env values if needed
python manage.py migrate
python manage.py runserver
```

### Frontend

```bash
cd frontend
npm install
npm start
```

Frontend default URL: `http://localhost:3000`
Backend default URL: `http://127.0.0.1:8000`
