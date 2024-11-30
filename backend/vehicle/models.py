from django.db import models

class Vehicle(models.Model):
    vehicleName = models.CharField(max_length=255)
    vehicleType = models.CharField(max_length=100)
    ownerName = models.CharField(max_length=255)
    isPaid = models.BooleanField(default=False) 

    def __str__(self):
        return self.vehicleName


class VehicleComponent(models.Model):
    vehicle = models.ForeignKey(Vehicle, related_name='components', on_delete=models.CASCADE)
    componentName = models.CharField(max_length=255)
    issueType = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)  # Set once on creation.
    updated_at = models.DateTimeField(auto_now=True)      # Updates on every save.
    
    def __str__(self):
        return f"{self.componentName} for {self.vehicle.vehicleName}"
