"use client"

import { useState } from "react";
import { VehicleList } from "@/components/vehicle/vehicle-list";
import { VehicleDetailPanel } from "@/components/vehicle/vehicle-detail-panel";
import { NotificationCenter } from "@/components/notification/notification-center";
import Header from "@/components/layout/header";
import Map from '@/components/map/map';

export default function Dashboard() {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(true); // Add an interactive panel and use it

  return (
    <main className="flex h-screen flex-col overflow-hidden bg-background">
      <Header />

      <div className="relative flex flex-1 overflow-hidden">
        {/* Main Map  */}
        <div className="relative flex-1">
          <Map 
            onVehicleSelect={setSelectedVehicleId}
            selectedVehicleId={selectedVehicleId}
          />
        </div>

        {/* Side Panel */}
        <div className={`w-96 transform transition-transform duration-300 ease-in-out
          ${isPanelOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="h-full border-l bg-background">
            <VehicleList
              onVehicleSelect={setSelectedVehicleId}
              selectedVehicleId={selectedVehicleId}
              closePanel={setIsPanelOpen}
            />
            {selectedVehicleId && (
              <VehicleDetailPanel
                vehicleId={selectedVehicleId}
                onClose={() => setSelectedVehicleId(null)}
              />
            )}
          </div>
        </div>
        
        {/* Notification Center */}
        <NotificationCenter />
      </div>
    </main>
  );
}
