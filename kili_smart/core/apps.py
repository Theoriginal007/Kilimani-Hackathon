from django.apps import AppConfig

class CoreConfig(AppConfig):
    # Default auto field type for primary keys
    default_auto_field = 'django.db.models.BigAutoField'
    
    # The name of the application
    name = 'core'
    
    # Optional: A human-readable name for the application
    verbose_name = 'Core Application'
    
    def ready(self):
        """
        Code to run when the application is ready.
        This method is used for application-specific initialization
        tasks that need to run after Django's startup sequence.
        """
        # Import signals if you have them, to ensure they are loaded
        # e.g., import signals
        
        # Example of connecting signals (if used)
        # from . import signals
        
        # Perform other setup tasks here if needed
        # Example: Registering custom management commands, initializing caches, etc.
        pass
    
    def get_default_auto_field(self):
        """
        Customize the default auto field used for model primary keys.
        """
        return self.default_auto_field
