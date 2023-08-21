from django.urls import path
from base.views.user_views import getUserProfile, getUsers, registerUser, updateUserProfile, deleteUser, updateUser, getUserById

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path("login/", TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path("register/", registerUser, name="register"),

    path("profile/", getUserProfile, name="user-profile"),
    path("profile/update/", updateUserProfile, name="user-profile-update"),
    path("", getUsers, name="users"),
    
    path("<str:pk>", getUserById, name="user"),
    path("update/<str:pk>", updateUser, name="user-update"),
    
    path("delete/<str:pk>", deleteUser, name="user-delete"),
]