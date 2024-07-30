# core/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('noise_pollution/', views.noise_pollution_status, name='noise_pollution_status'),
    path('water_shortages/', views.water_shortages_status, name='water_shortages_status'),
    path('waste_management/', views.waste_management_status, name='waste_management_status'),
    path('power_blackouts/', views.power_blackouts_status, name='power_blackouts_status'),
    path('neighborhood_info/', views.neighborhood_info, name='neighborhood_info'),
]
