from django.test import TestCase
from django.utils import timezone
from .models import PublicParticipation, WasteMonitor, PowerMonitor, NoiseMonitor, WaterMonitor

class PublicParticipationTests(TestCase):
    def setUp(self):
        """
        Set up test data for PublicParticipation model.
        """
        self.obj = PublicParticipation.objects.create(
            user="Test User",
            feedback="Great service!"
        )

    def test_creation(self):
        """
        Test creation of a PublicParticipation instance.
        """
        self.assertIsInstance(self.obj, PublicParticipation)
        self.assertEqual(self.obj.user, "Test User")
        self.assertEqual(self.obj.feedback, "Great service!")
        self.assertTrue(self.obj.participation_date <= timezone.now())

    def test_str_method(self):
        """
        Test the __str__ method of PublicParticipation.
        """
        expected_str = f"{self.obj.user} - {self.obj.participation_date}"
        self.assertEqual(str(self.obj), expected_str)

class WasteMonitorTests(TestCase):
    def setUp(self):
        """
        Set up test data for WasteMonitor model.
        """
        self.obj = WasteMonitor.objects.create(
            location="City Center",
            waste_type="Plastic",
            amount=120.5
        )

    def test_creation(self):
        """
        Test creation of a WasteMonitor instance.
        """
        self.assertIsInstance(self.obj, WasteMonitor)
        self.assertEqual(self.obj.location, "City Center")
        self.assertEqual(self.obj.waste_type, "Plastic")
        self.assertEqual(self.obj.amount, 120.5)
        self.assertTrue(self.obj.recorded_at <= timezone.now())

    def test_str_method(self):
        """
        Test the __str__ method of WasteMonitor.
        """
        expected_str = f"{self.obj.waste_type} at {self.obj.location}"
        self.assertEqual(str(self.obj), expected_str)

class PowerMonitorTests(TestCase):
    def setUp(self):
        """
        Set up test data for PowerMonitor model.
        """
        self.obj = PowerMonitor.objects.create(
            location="Building A",
            power_usage=350.75
        )

    def test_creation(self):
        """
        Test creation of a PowerMonitor instance.
        """
        self.assertIsInstance(self.obj, PowerMonitor)
        self.assertEqual(self.obj.location, "Building A")
        self.assertEqual(self.obj.power_usage, 350.75)
        self.assertTrue(self.obj.recorded_at <= timezone.now())

    def test_str_method(self):
        """
        Test the __str__ method of PowerMonitor.
        """
        expected_str = f"Power usage at {self.obj.location}"
        self.assertEqual(str(self.obj), expected_str)

class NoiseMonitorTests(TestCase):
    def setUp(self):
        """
        Set up test data for NoiseMonitor model.
        """
        self.obj = NoiseMonitor.objects.create(
            location="Street B",
            noise_level=75.0
        )

    def test_creation(self):
        """
        Test creation of a NoiseMonitor instance.
        """
        self.assertIsInstance(self.obj, NoiseMonitor)
        self.assertEqual(self.obj.location, "Street B")
        self.assertEqual(self.obj.noise_level, 75.0)
        self.assertTrue(self.obj.recorded_at <= timezone.now())

    def test_str_method(self):
        """
        Test the __str__ method of NoiseMonitor.
        """
        expected_str = f"Noise level at {self.obj.location}"
        self.assertEqual(str(self.obj), expected_str)

class WaterMonitorTests(TestCase):
    def setUp(self):
        """
        Set up test data for WaterMonitor model.
        """
        self.obj = WaterMonitor.objects.create(
            location="Park C",
            water_quality="Good"
        )

    def test_creation(self):
        """
        Test creation of a WaterMonitor instance.
        """
        self.assertIsInstance(self.obj, WaterMonitor)
        self.assertEqual(self.obj.location, "Park C")
        self.assertEqual(self.obj.water_quality, "Good")
        self.assertTrue(self.obj.recorded_at <= timezone.now())

    def test_str_method(self):
        """
        Test the __str__ method of WaterMonitor.
        """
        expected_str = f"Water quality at {self.obj.location}"
        self.assertEqual(str(self.obj), expected_str)
