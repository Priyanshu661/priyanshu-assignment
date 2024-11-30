from rest_framework import generics, status
from rest_framework.response import Response
from .models import Vehicle, VehicleComponent
from .serializers import VehicleSerializer, VehicleComponentSerializer
from django.db.models import Sum
from django.db.models.functions import TruncDay, TruncMonth, TruncYear
from rest_framework.views import APIView

# Fetch all vehicles
class VehicleListView(generics.ListAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

# Create a vehicle
class CreateVehicleView(generics.CreateAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

class VehicleDetailView(generics.RetrieveAPIView):
    queryset = Vehicle.objects.all()  # Get all vehicles
    serializer_class = VehicleSerializer  # Use the vehicle serializer

    # URL parameter to filter the vehicle by id
    lookup_field = 'id'  # or 'pk', default is 'pk' if you want to use 'id'


class UpdateVehicleView(generics.UpdateAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

    def update(self, request, *args, **kwargs):
        # Get the vehicle object by ID
        vehicle = self.get_object()

        # Set the `isPaid` field to True (or False) directly in the backend
        vehicle.isPaid = True  # Or False, depending on your business logic
        vehicle.save()

        # Return a success response
        return Response({"message": "Vehicle updated successfully"}, status=status.HTTP_200_OK)

# Fetch all components by vehicle ID
class VehicleComponentListView(generics.ListAPIView):
    serializer_class = VehicleComponentSerializer

    def get_queryset(self):
        vehicle_id = self.kwargs['vehicle_id']
        return VehicleComponent.objects.filter(vehicle_id=vehicle_id)

# Add a vehicle component
class AddVehicleComponentView(generics.CreateAPIView):
    queryset = VehicleComponent.objects.all()
    serializer_class = VehicleComponentSerializer


class RevenueGraphView(APIView):
    def get(self, request):
        # Group by day
        daily_revenue = (
            VehicleComponent.objects.annotate(day=TruncDay("created_at"))
            .values("day")
            .annotate(total_revenue=Sum("price"))
            .order_by("day")
        )

        # Group by month
        monthly_revenue = (
            VehicleComponent.objects.annotate(month=TruncMonth("created_at"))
            .values("month")
            .annotate(total_revenue=Sum("price"))
            .order_by("month")
        )

        # Group by year
        yearly_revenue = (
            VehicleComponent.objects.annotate(year=TruncYear("created_at"))
            .values("year")
            .annotate(total_revenue=Sum("price"))
            .order_by("year")
        )

        return Response(
            {
                "daily": list(daily_revenue),
                "monthly": list(monthly_revenue),
                "yearly": list(yearly_revenue),
            },
            status=status.HTTP_200_OK,
        )
