"use client";

import { useVehicles } from "@/hooks/use-vehicles";
import { cn } from "@/lib/utils";
import {
  Battery,
  Circle,
  Clock,
  MapPin,
  Truck,
  // CircleX,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface VehicleListProps {
  onVehicleSelect: (id: string) => void;
  selectedVehicleId: string | null;
  closePanel: (action: boolean) => void;
}

export function VehicleList({ onVehicleSelect, selectedVehicleId, closePanel }: VehicleListProps) {
  const { vehicles } = useVehicles();

  return (
    <ScrollArea className="h-[calc(100vh-3.5rem)]">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="mb-4 text-lg font-semibold">Vehicles Overview</h2>
          {/* <button onClick={() => closePanel(false)}>
            <CircleX className="h-6 w-6" />
          </button> */}
        </div>
        <div className="space-y-2">
          {vehicles.map((vehicle) => (
            <button
              key={vehicle.id}
              onClick={() => onVehicleSelect(vehicle.id)}
              className={cn(
                "w-full rounded-lg border p-4 text-left transition-colors hover:bg-accent",
                selectedVehicleId === vehicle.id && "border-primary bg-accent"
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5" />
                  <div>
                    <h3 className="font-medium">{vehicle.id}</h3>
                    <p className="text-sm text-muted-foreground">
                      {vehicle.make} {vehicle.model}
                    </p>
                  </div>
                </div>
                <StatusIndicator status={vehicle.status} />
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{vehicle.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Battery className="h-4 w-4" />
                  <span>{vehicle.battery}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{vehicle.lastUpdate}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}

function StatusIndicator({ status }: { status: string }) {
  const colors = {
    active: "text-green-500",
    idle: "text-yellow-500",
    offline: "text-gray-500",
  };

  return (
    <div className="flex items-center gap-1">
      <Circle className={cn("h-3 w-3 fill-current", colors[status as keyof typeof colors])} />
      <span className="text-sm capitalize">{status}</span>
    </div>
  );
}