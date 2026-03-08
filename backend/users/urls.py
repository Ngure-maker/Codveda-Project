from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import RegisterViewSet

register_view = RegisterViewSet.as_view({'post': 'create'})

urlpatterns = [
    path('register', register_view, name='register'),
    path('login', TokenObtainPairView.as_view(), name='login'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
]
