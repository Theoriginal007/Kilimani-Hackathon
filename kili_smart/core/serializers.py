from rest_framework import serializers
from .models import PublicParticipation, WaterShortage, PowerBlackout, NoisePollution, WasteManagement

class PublicParticipationSerializer(serializers.ModelSerializer):
    class Meta:
        model = PublicParticipation
        fields = '__all__'

class WaterShortageSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaterShortage
        fields = '__all__'

class PowerBlackoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = PowerBlackout
        fields = '__all__'

class NoisePollutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = NoisePollution
        fields = '__all__'

class WasteManagementSerializer(serializers.ModelSerializer):
    class Meta:
        model = WasteManagement
        fields = '__all__'
