from django.db import models

class PublicParticipation(models.Model):
    """
    Model to store information about public participation feedback.
    """
    user = models.CharField(max_length=100, help_text="Name of the user providing feedback")
    participation_date = models.DateTimeField(auto_now_add=True, help_text="Date and time when the feedback was recorded")
    feedback = models.TextField(help_text="Detailed feedback from the user")

    class Meta:
        verbose_name = 'Public Participation'
        verbose_name_plural = 'Public Participations'
        ordering = ['-participation_date']

    def __str__(self):
        """
        Return a string representation of the PublicParticipation instance.
        """
        return f"{self.user} - {self.participation_date.strftime('%Y-%m-%d %H:%M:%S')}"

class WasteMonitor(models.Model):
    """
    Model to record information about waste monitoring at various locations.
    """
    location = models.CharField(max_length=100, help_text="Location where the waste was monitored")
    waste_type = models.CharField(max_length=50, help_text="Type of waste recorded")
    amount = models.FloatField(help_text="Amount of waste in kilograms")
    recorded_at = models.DateTimeField(auto_now_add=True, help_text="Date and time when the waste was recorded")

    class Meta:
        verbose_name = 'Waste Monitor'
        verbose_name_plural = 'Waste Monitors'
        ordering = ['-recorded_at']

    def __str__(self):
        """
        Return a string representation of the WasteMonitor instance.
        """
        return f"{self.waste_type} at {self.location} - {self.amount} kg"

class PowerMonitor(models.Model):
    """
    Model to record power usage data at various locations.
    """
    location = models.CharField(max_length=100, help_text="Location where power usage was recorded")
    power_usage = models.FloatField(help_text="Amount of power used in kilowatt-hours (kWh)")
    recorded_at = models.DateTimeField(auto_now_add=True, help_text="Date and time when the power usage was recorded")

    class Meta:
        verbose_name = 'Power Monitor'
        verbose_name_plural = 'Power Monitors'
        ordering = ['-recorded_at']

    def __str__(self):
        """
        Return a string representation of the PowerMonitor instance.
        """
        return f"Power usage at {self.location} - {self.power_usage} kWh"

class NoiseMonitor(models.Model):
    """
    Model to record noise levels at various locations.
    """
    location = models.CharField(max_length=100, help_text="Location where noise level was recorded")
    noise_level = models.FloatField(help_text="Noise level in decibels (dB)")
    recorded_at = models.DateTimeField(auto_now_add=True, help_text="Date and time when the noise level was recorded")

    class Meta:
        verbose_name = 'Noise Monitor'
        verbose_name_plural = 'Noise Monitors'
        ordering = ['-recorded_at']

    def __str__(self):
        """
        Return a string representation of the NoiseMonitor instance.
        """
        return f"Noise level at {self.location} - {self.noise_level} dB"

class WaterMonitor(models.Model):
    """
    Model to record water quality data at various locations.
    """
    location = models.CharField(max_length=100, help_text="Location where water quality was recorded")
    water_quality = models.CharField(max_length=50, help_text="Water quality assessment (e.g., 'Good', 'Poor')")
    recorded_at = models.DateTimeField(auto_now_add=True, help_text="Date and time when the water quality was recorded")

    class Meta:
        verbose_name = 'Water Monitor'
        verbose_name_plural = 'Water Monitors'
        ordering = ['-recorded_at']

    def __str__(self):
        """
        Return a string representation of the WaterMonitor instance.
        """
        return f"Water quality at {self.location} - {self.water_quality}"
