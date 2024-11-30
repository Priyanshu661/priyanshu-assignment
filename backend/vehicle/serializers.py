from rest_framework import serializers
from .models import Vehicle, VehicleComponent

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = ['id', 'vehicleName', 'vehicleType', 'ownerName', 'isPaid']


class VehicleComponentSerializer(serializers.ModelSerializer):
    vehicleId = serializers.PrimaryKeyRelatedField(queryset=Vehicle.objects.all(), source='vehicle')

    class Meta:
        model = VehicleComponent
        fields = ['id', 'vehicleId', 'componentName', 'issueType', 'price',"created_at","updated_at"]
