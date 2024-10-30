// VehicleMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useVehicles } from "@/hooks/use-vehicles";
import { Icon } from "leaflet";

// Fix marker icons
// delete L.Icon.Default.prototype._getIcoUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

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

const VehicleMap = ({ onVehicleSelect, selectedVehicleId }: MapProps) => {
    const { vehicles } = useVehicles();

    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {vehicles.map((vehicle, index) => (
                <Marker 
                    key={index} 
                    position={[vehicle.latitude, vehicle.longitude]}
                    icon={vehicleIcon}
                    eventHandlers={{
                        click: () => onVehicleSelect(vehicle.id),
                    }}
                >
                    <Popup>
                        <div>
                            <h3 className="font-semibold">{vehicle.id}</h3>
                            <p>Speed: {vehicle.speed} km/h</p>
                            <p>Status: {vehicle.status}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default VehicleMap;
