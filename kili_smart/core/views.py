# core/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def noise_pollution_status(request):
    data = {
        "status": "Moderate",
        "details": "Noise levels are within acceptable limits."
    }
    return Response(data)

@api_view(['GET'])
def water_shortages_status(request):
    data = {
        "status": "Critical",
        "details": "Water shortages are affecting the area significantly."
    }
    return Response(data)

@api_view(['GET'])
def waste_management_status(request):
    data = {
        "status": "Improving",
        "details": "Waste management practices have been improved recently."
    }
    return Response(data)

@api_view(['GET'])
def power_blackouts_status(request):
    data = {
        "status": "Occasional",
        "details": "Power blackouts occur occasionally due to maintenance."
    }
    return Response(data)

@api_view(['GET'])
def neighborhood_info(request):
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
