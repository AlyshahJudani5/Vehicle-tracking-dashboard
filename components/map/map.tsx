"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Map as LeafletMap } from "leaflet"; // Ensure this is imported for type
import L, { Marker as LeafletMarker } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useVehicles } from "@/hooks/use-vehicles";
import { Car, Bike } from 'lucide-react'; // Import Lucide React's car icon
import ReactDOMServer from 'react-dom/server'; // To render React components as static HTML

// // Custom marker icon
// const vehicleIcon = new Icon({
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

// Function to convert a React component into static HTML
const createIconFromComponent = (component: JSX.Element) => {
  return new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(ReactDOMServer.renderToStaticMarkup(component)),  // Convert the component to base64 encoded SVG
    iconSize: [30, 30], // Adjust the size of the icon
    iconAnchor: [15, 30], // Adjust the anchor point for proper alignment
  });
};

interface MapProps {
  onVehicleSelect: (id: string) => void;
  selectedVehicleId: string | null;
}

// Define the type for the ref
type MarkerRef = {
  [key: string]: LeafletMarker; // Vehicle numbers as keys, Leaflet markers as values
};

export default function Map({ onVehicleSelect, selectedVehicleId }: MapProps) {
  const { vehicles } = useVehicles();
  const [map, setMap] = useState<LeafletMap | null>(null);
  const markersRef = useRef<MarkerRef>({}); // Typed ref for markers

  // Center map on selected vehicle
  useEffect(() => {
    if (map && selectedVehicleId) {
      const vehicle = vehicles.find((v) => v.vehicleNumber === selectedVehicleId);
      if (vehicle) {
        // Get the latest location update for the selected vehicle
        const latestUpdate = vehicle.locationUpdates[vehicle.locationUpdates.length - 1];
        map.setView([latestUpdate.latitude, latestUpdate.longitude], 15);

        // Open the popup for the selected vehicle
        const marker = markersRef.current[selectedVehicleId];
        if (marker) marker.openPopup();
      }
    }
  }, [selectedVehicleId, vehicles, map]);

  return (
    <MapContainer
      center={[24.8007, 67.0711]}
      zoom={13}
      className="h-full w-full"
      // @ts-ignore
      whenReady={(event: L.LeafletEvent) => setMap(event.target as L.Map)}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {vehicles.map((vehicle) => {
        // Get the latest location update for each vehicle
        const latestUpdate = vehicle.locationUpdates[vehicle.locationUpdates.length - 1];

        // Create a Lucide Car icon for the vehicle
        const vehicleIcon = createIconFromComponent(<Car size={30} color="blue" />); // Use the size and color you want

        return (
          <Marker
            key={vehicle.vehicleNumber}
            position={[latestUpdate.latitude, latestUpdate.longitude]}
            icon={vehicleIcon}
            ref={(marker) => {
              if (marker) markersRef.current[vehicle.vehicleNumber] = marker;
            }}
            eventHandlers={{
              click: () => onVehicleSelect(vehicle.vehicleNumber),
            }}
          >
            <Popup offset={[0, -20]}>
              <div className="p-0">
                <h3 className="font-semibold">{vehicle.vehicleNumber}</h3>
                <p>Area: {latestUpdate.area}</p>
                <p>Time: {latestUpdate.time}</p>
                <p>Date: {latestUpdate.date}</p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
