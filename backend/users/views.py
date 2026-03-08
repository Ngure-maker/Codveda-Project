from rest_framework import mixins, permissions, viewsets

from .serializers import RegisterSerializer


class RegisterViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]
