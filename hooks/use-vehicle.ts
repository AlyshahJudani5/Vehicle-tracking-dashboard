"use client";

import { useState, useEffect } from "react";

interface TimelineEvent {
  description: string;
  timestamp: string;
}

interface Vehicle {
  id: string;
  make: string;
  model: string;
  status: string;
  location: string;
  speed: number;
  battery: number;
  timeline: TimelineEvent[];
}

export function useVehicle(id: string) {
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);

  useEffect(() => {
    // Simulate API call - in a real app, this would fetch from a backend
    setVehicle({
      id,
      make: "Tesla",
      model: "Model 3",
      status: "active",
      location: "Downtown",
      speed: 45,
      battery: 78,
      timeline: [
        {
          description: "Started route to Downtown",
          timestamp: "10:30 AM",
        },
        {
          description: "Completed delivery at Store #123",
          timestamp: "10:45 AM",
        },
        {
          description: "Battery level below 80%",
          timestamp: "11:00 AM",
        },
        {
          description: "Entering high-traffic area",
          timestamp: "11:15 AM",
        },
      ],
    });
  }, [id]);

  return { vehicle };
}