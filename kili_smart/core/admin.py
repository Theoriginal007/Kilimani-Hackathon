from django.contrib import admin
from .models import (
    PublicParticipation,
    WasteMonitor,
    PowerMonitor,
    NoiseMonitor,
    WaterMonitor
)

class PublicParticipationAdmin(admin.ModelAdmin):
    list_display = ('id', 'participant_name', 'feedback_date', 'feedback_type')
    list_filter = ('feedback_type', 'feedback_date')
    search_fields = ('participant_name', 'feedback_details')
    ordering = ('-feedback_date',)
    readonly_fields = ('id',)

    def get_readonly_fields(self, request, obj=None):
        if obj:  # Editing an existing object
            return self.readonly_fields + ('id',)
        return self.readonly_fields

class WasteMonitorAdmin(admin.ModelAdmin):
    list_display = ('id', 'location', 'waste_type', 'amount', 'measurement_date')
    list_filter = ('waste_type', 'measurement_date')
    search_fields = ('location', 'waste_type')
    ordering = ('-measurement_date',)
    readonly_fields = ('id',)

    def get_readonly_fields(self, request, obj=None):
        if obj:  # Editing an existing object
            return self.readonly_fields + ('id',)
        return self.readonly_fields

class PowerMonitorAdmin(admin.ModelAdmin):
    list_display = ('id', 'location', 'power_usage', 'measurement_date')
    list_filter = ('measurement_date',)
    search_fields = ('location',)
    ordering = ('-measurement_date',)
    readonly_fields = ('id',)

    def get_readonly_fields(self, request, obj=None):
        if obj:  # Editing an existing object
            return self.readonly_fields + ('id',)
        return self.readonly_fields

class NoiseMonitorAdmin(admin.ModelAdmin):
    list_display = ('id', 'location', 'noise_level', 'measurement_date')
    list_filter = ('measurement_date',)
    search_fields = ('location',)
    ordering = ('-measurement_date',)
    readonly_fields = ('id',)

    def get_readonly_fields(self, request, obj=None):
        if obj:  # Editing an existing object
            return self.readonly_fields + ('id',)
        return self.readonly_fields

class WaterMonitorAdmin(admin.ModelAdmin):
    list_display = ('id', 'location', 'water_quality', 'measurement_date')
    list_filter = ('measurement_date',)
    search_fields = ('location', 'water_quality')
    ordering = ('-measurement_date',)
    readonly_fields = ('id',)

    def get_readonly_fields(self, request, obj=None):
        if obj:  # Editing an existing object
            return self.readonly_fields + ('id',)
        return self.readonly_fields

# Registering the models with their respective admin classes
admin.site.register(PublicParticipation, PublicParticipationAdmin)
admin.site.register(WasteMonitor, WasteMonitorAdmin)
admin.site.register(PowerMonitor, PowerMonitorAdmin)
admin.site.register(NoiseMonitor, NoiseMonitorAdmin)
admin.site.register(WaterMonitor, WaterMonitorAdmin)
