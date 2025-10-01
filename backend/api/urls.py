from django.urls import path
from .views import patients_list

urlpatterns = [
    path("patients/", patients_list),
]
