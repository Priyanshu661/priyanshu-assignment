export class VehicleServices {
  static baseUrl = "http://127.0.0.1:8000/api"; // Replace with your backend URL if different

  // Fetch all vehicles
  static async fetchAllVehicles() {
    try {
      const response = await fetch(`${this.baseUrl}/vehicles/`);
      if (!response.ok) {
        throw new Error("Failed to fetch vehicles");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      throw error;
    }
  }


  static async fetchVehicleDetails(vehicleId) {
    try {
      const response = await fetch(`${this.baseUrl}/vehicles/${vehicleId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch vehicles");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      throw error;
    }
  }

  // Create a new vehicle
  static async createVehicle(vehicleData) {
    try {
      const response = await fetch(`${this.baseUrl}/vehicles/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vehicleData),
      });
      if (!response.ok) {
        throw new Error("Failed to create vehicle");
      }
      return await response.json();
    } catch (error) {
      console.error("Error creating vehicle:", error);
      throw error;
    }
  }

  // Update isPaid for a vehicle
  static async updateVehicle(vehicleId) {
    try {
      const response = await fetch(
        `${this.baseUrl}/vehicles/${vehicleId}/update/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update vehicle isPaid status");
      }
      return await response.json();
    } catch (error) {
      console.error("Error updating vehicle isPaid:", error);
      throw error;
    }
  }

  // Fetch all components by vehicle ID
  static async fetchVehicleComponents(vehicleId) {
    try {
      const response = await fetch(
        `${this.baseUrl}/vehicles/${vehicleId}/components`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch vehicle components");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching vehicle components:", error);
      throw error;
    }
  }

  // Add a new component to a vehicle
  static async addVehicleComponent(componentData) {
    try {
      const response = await fetch(`${this.baseUrl}/vehicles/components/add/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(componentData),
      });
      if (!response.ok) {
        throw new Error("Failed to add vehicle component");
      }
      return await response.json();
    } catch (error) {
      console.error("Error adding vehicle component:", error);
      throw error;
    }
  }


  static async fetchRevenueData() {
    const response = await fetch(`${this.baseUrl}/revenue-graph/`);
    if (!response.ok) {
      throw new Error("Error fetching revenue data");
    }
    return await response.json();
  }
}
