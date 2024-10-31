"use client";

import { useState, useEffect } from "react";
import { Vehicle, mockVehicles } from "@/data"

export function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(mockVehicles.slice(0, 50));

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles((prev) =>
        prev.map((vehicle) => ({
          ...vehicle,
          speed: vehicle.status === "active" ? Math.floor(Math.random() * 60) + 20 : 0,
          battery: Math.max(0, vehicle.battery - Math.random()),
          latitude: vehicle.latitude + (Math.random() - 0.5) * 0.001,
          longitude: vehicle.longitude + (Math.random() - 0.5) * 0.001,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return { vehicles };
}