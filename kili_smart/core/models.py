from django.db import models

class PublicParticipation(models.Model):
    feedback = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class WaterShortage(models.Model):
    date = models.DateField()
    amount = models.FloatField()

class PowerBlackout(models.Model):
    date = models.DateTimeField()
    duration = models.FloatField()

class NoisePollution(models.Model):
    location = models.CharField(max_length=255)
    level = models.FloatField()

class WasteManagement(models.Model):
    location = models.CharField(max_length=255)
    waste_level = models.FloatField()
