from django.urls import path
from .views import (
    VehicleListView,
    CreateVehicleView,
    UpdateVehicleView,
    VehicleComponentListView,
    AddVehicleComponentView,
    VehicleDetailView,
    RevenueGraphView
)
urlpatterns = [
    path('vehicles/', VehicleListView.as_view(), name='vehicle-list'),
     path('vehicles/<int:id>/', VehicleDetailView.as_view(), name='vehicle_detail'),  
    path('vehicles/create/', CreateVehicleView.as_view(), name='create-vehicle'),
    path('vehicles/<int:pk>/update/', UpdateVehicleView.as_view(), name='update-vehicle'),
    path('vehicles/<int:vehicle_id>/components/', VehicleComponentListView.as_view(), name='vehicle-components'),
    path('vehicles/components/add/', AddVehicleComponentView.as_view(), name='add-vehicle-component'),
     path("revenue-graph/", RevenueGraphView.as_view(), name="revenue_graph"),
]
