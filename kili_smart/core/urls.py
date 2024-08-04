from django.urls import path
from . import views

urlpatterns = [
    # Endpoint for Public Participation
    path('public-participation/', views.PublicParticipationListCreate.as_view(), name='public-participation-list-create'),
    
    # Endpoint for Waste Monitor
    path('waste-monitor/', views.WasteMonitorListCreate.as_view(), name='waste-monitor-list-create'),
    
    # Endpoint for Power Monitor
    path('power-monitor/', views.PowerMonitorListCreate.as_view(), name='power-monitor-list-create'),
    
    # Endpoint for Noise Monitor
    path('noise-monitor/', views.NoiseMonitorListCreate.as_view(), name='noise-monitor-list-create'),
    
    # Endpoint for Water Monitor
    path('water-monitor/', views.WaterMonitorListCreate.as_view(), name='water-monitor-list-create'),
]
