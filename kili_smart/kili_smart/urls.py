from django.urls import path
from . import views

urlpatterns = [
    path('public-participation/', views.PublicParticipationListCreate.as_view(), name='public-participation-list-create'),
    path('waste-monitor/', views.WasteMonitorListCreate.as_view(), name='waste-monitor-list-create'),
    path('power-monitor/', views.PowerMonitorListCreate.as_view(), name='power-monitor-list-create'),
    path('noise-monitor/', views.NoiseMonitorListCreate.as_view(), name='noise-monitor-list-create'),
    path('water-monitor/', views.WaterMonitorListCreate.as_view(), name='water-monitor-list-create'),
]
