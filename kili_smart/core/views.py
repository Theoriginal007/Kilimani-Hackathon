# core/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from .models import PublicParticipation, WasteMonitor, PowerMonitor, NoiseMonitor, WaterMonitor
from .serializers import PublicParticipationSerializer, WasteMonitorSerializer, PowerMonitorSerializer, NoiseMonitorSerializer, WaterMonitorSerializer

@api_view(['GET'])
def noise_pollution_status(request):
    """
    Retrieve the current status of noise pollution in the area.
    """
    data = {
        "status": "Moderate",
        "details": "Noise levels are within acceptable limits."
    }
    return Response(data)

@api_view(['GET'])
def water_shortages_status(request):
    """
    Retrieve the current status of water shortages in the area.
    """
    data = {
        "status": "Critical",
        "details": "Water shortages are affecting the area significantly."
    }
    return Response(data)

@api_view(['GET'])
def waste_management_status(request):
    """
    Retrieve the current status of waste management in the area.
    """
    data = {
        "status": "Improving",
        "details": "Waste management practices have been improved recently."
    }
    return Response(data)

@api_view(['GET'])
def power_blackouts_status(request):
    """
    Retrieve the current status of power blackouts in the area.
    """
    data = {
        "status": "Occasional",
        "details": "Power blackouts occur occasionally due to maintenance."
    }
    return Response(data)

@api_view(['GET'])
def neighborhood_info(request):
    """
    Retrieve the current status of various neighborhood issues.
    """
    data = {
        "noise_pollution": {
            "status": "Moderate",
            "details": "Noise levels are within acceptable limits."
        },
        "water_shortages": {
            "status": "Critical",
            "details": "Water shortages are affecting the area significantly."
        },
        "waste_management": {
            "status": "Improving",
            "details": "Waste management practices have been improved recently."
        },
        "power_blackouts": {
            "status": "Occasional",
            "details": "Power blackouts occur occasionally due to maintenance."
        }
    }
    return Response(data)

class PublicParticipationListCreate(generics.ListCreateAPIView):
    """
    List and create Public Participation records.
    """
    queryset = PublicParticipation.objects.all()
    serializer_class = PublicParticipationSerializer

class WasteMonitorListCreate(generics.ListCreateAPIView):
    """
    List and create Waste Monitor records.
    """
    queryset = WasteMonitor.objects.all()
    serializer_class = WasteMonitorSerializer

class PowerMonitorListCreate(generics.ListCreateAPIView):
    """
    List and create Power Monitor records.
    """
    queryset = PowerMonitor.objects.all()
    serializer_class = PowerMonitorSerializer

class NoiseMonitorListCreate(generics.ListCreateAPIView):
    """
    List and create Noise Monitor records.
    """
    queryset = NoiseMonitor.objects.all()
    serializer_class = NoiseMonitorSerializer

class WaterMonitorListCreate(generics.ListCreateAPIView):
    """
    List and create Water Monitor records.
    """
    queryset = WaterMonitor.objects.all()
    serializer_class = WaterMonitorSerializer
