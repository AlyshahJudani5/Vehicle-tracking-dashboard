"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Map as LeafletMap } from "leaflet"; // Ensure this is imported for type
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useVehicles } from "@/hooks/use-vehicles";
import { cn } from "@/lib/utils";

// Custom marker icon
const vehicleIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapProps {
  onVehicleSelect: (id: string) => void;
  selectedVehicleId: string | null;
}

export default function Map({ onVehicleSelect, selectedVehicleId }: MapProps) {
  const { vehicles } = useVehicles();
  // const [map, setMap] = useState<LeafletMap | null>(null);
  const [map] = useState<LeafletMap | null>(null);

  // Center map on selected vehicle
  useEffect(() => {
    // console.log(map, selectedVehicleId)
    if (map && selectedVehicleId) {
      const vehicle = vehicles.find((v) => v.id === selectedVehicleId);
      if (vehicle) {
        map.setView([vehicle.latitude, vehicle.longitude], 15);
      }
    }
  }, [selectedVehicleId, vehicles, map]);

  return (
    <MapContainer
      center={[47.2419412051282, -122.46377656410257]}
      // center={[47.39, -1.25]}
      zoom={13}
      className={cn("h-full w-full")}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {vehicles.map((vehicle) => (
        <Marker
          key={vehicle.id}
          position={[vehicle.latitude, vehicle.longitude]}
          icon={vehicleIcon}
          eventHandlers={{
            click: () => onVehicleSelect(vehicle.id),
          }}
        >
          <Popup offset={[0, -20]}>
            <div className="p-0">
              <h3 className="font-semibold">{vehicle.id}</h3>
              <p>Make: {vehicle.make}</p>
              <p>Model: {vehicle.model}</p>
              <p>Speed: {vehicle.speed} km/h</p>
              <p>Status: {vehicle.status}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
