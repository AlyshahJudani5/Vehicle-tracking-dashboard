"use client";

import { useState, useEffect } from "react";

interface Vehicle {
  id: string;
  make: string;
  model: string;
  status: "active" | "idle" | "offline";
  location: string;
  latitude: number;
  longitude: number;
  speed: number;
  battery: number;
  lastUpdate: string;
}

// Simulated data - in a real app, this would come from an API
const mockVehicles: Vehicle[] = [
  {
    id: "VH-001",
    make: "Tesla",
    model: "Model 3",
    status: "active",
    location: "Downtown",
    latitude: 51.505,
    longitude: -0.09,
    speed: 45,
    battery: 78,
    lastUpdate: "2 mins ago",
  },
  {
    id: "VH-002",
    make: "Ford",
    model: "Transit",
    status: "idle",
    location: "North End",
    latitude: 51.51,
    longitude: -0.1,
    speed: 0,
    battery: 45,
    lastUpdate: "5 mins ago",
  },
  {
    id: "VH-003",
    make: "Toyota",
    model: "Prius",
    status: "offline",
    location: "South Side",
    latitude: 51.49,
    longitude: -0.08,
    speed: 0,
    battery: 92,
    lastUpdate: "15 mins ago",
  },
];

export function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(mockVehicles);

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