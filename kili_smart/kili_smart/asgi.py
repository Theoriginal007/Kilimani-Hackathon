"""
ASGI config for kili_smart project.

This module contains the ASGI (Asynchronous Server Gateway Interface) configuration
for the KILISMART Django project. It exposes an ASGI callable named ``application``
that serves as the entry point for ASGI-compatible web servers to interact with the Django
application.

ASGI is used for asynchronous server communication and allows handling of WebSockets,
long-lived connections, and other asynchronous protocols. 

For more information on ASGI and how to deploy Django applications using ASGI,
refer to the Django documentation:
https://docs.djangoproject.com/en/stable/howto/deployment/asgi/

"""

import os
from django.core.asgi import get_asgi_application

# Set the default settings module for the 'asgi' command.
# This environment variable tells Django which settings to use for this ASGI application.
# 'kili_smart.settings' refers to the settings module in the kili_smart project.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'kili_smart.settings')

# Get the ASGI application for the project.
# The get_asgi_application() function returns an ASGI application callable that Django uses.
application = get_asgi_application()
