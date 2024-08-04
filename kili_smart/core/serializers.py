from rest_framework import serializers
from .models import PublicParticipation, WasteMonitor, PowerMonitor, NoiseMonitor, WaterMonitor

class PublicParticipationSerializer(serializers.ModelSerializer):
    """
    Serializer for the PublicParticipation model.
    Converts model instances to JSON and validates incoming data.
    """
    class Meta:
        model = PublicParticipation
        fields = '__all__'
        # Optionally, you can include custom validation here
        # Example:
        # extra_kwargs = {
        #     'user': {'validators': [validators.MaxLengthValidator(100)]},
        #     'feedback': {'required': True}
        # }

class WasteMonitorSerializer(serializers.ModelSerializer):
    """
    Serializer for the WasteMonitor model.
    Converts model instances to JSON and validates incoming data.
    """
    class Meta:
        model = WasteMonitor
        fields = '__all__'
        # Optionally, you can include custom validation here
        # Example:
        # extra_kwargs = {
        #     'amount': {'validators': [validators.MinValueValidator(0)]},
        #     'waste_type': {'required': True}
        # }

class PowerMonitorSerializer(serializers.ModelSerializer):
    """
    Serializer for the PowerMonitor model.
    Converts model instances to JSON and validates incoming data.
    """
    class Meta:
        model = PowerMonitor
        fields = '__all__'
        # Optionally, you can include custom validation here
        # Example:
        # extra_kwargs = {
        #     'power_usage': {'validators': [validators.MinValueValidator(0)]},
        #     'location': {'required': True}
        # }

class NoiseMonitorSerializer(serializers.ModelSerializer):
    """
    Serializer for the NoiseMonitor model.
    Converts model instances to JSON and validates incoming data.
    """
    class Meta:
        model = NoiseMonitor
        fields = '__all__'
        # Optionally, you can include custom validation here
        # Example:
        # extra_kwargs = {
        #     'noise_level': {'validators': [validators.MinValueValidator(0)]},
        #     'location': {'required': True}
        # }

class WaterMonitorSerializer(serializers.ModelSerializer):
    """
    Serializer for the WaterMonitor model.
    Converts model instances to JSON and validates incoming data.
    """
    class Meta:
        model = WaterMonitor
        fields = '__all__'
        # Optionally, you can include custom validation here
        # Example:
        # extra_kwargs = {
        #     'water_quality': {'required': True},
        #     'location': {'required': True}
        # }
