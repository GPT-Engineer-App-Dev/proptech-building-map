import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Container } from "@chakra-ui/react";
import BuildingInfoCard from "../components/BuildingInfoCard";
import "leaflet/dist/leaflet.css";

const buildings = [
  { id: 1, name: "Building 1", position: [59.911491, 10.757933], sensorData: { temperature: 21, humidity: 45, co2: 400 } },
  { id: 2, name: "Building 2", position: [60.391263, 5.322054], sensorData: { temperature: 22, humidity: 50, co2: 420 } },
  { id: 3, name: "Building 3", position: [63.430515, 10.395053], sensorData: { temperature: 20, humidity: 55, co2: 410 } },
  { id: 4, name: "Building 4", position: [58.969975, 5.733107], sensorData: { temperature: 23, humidity: 60, co2: 430 } },
  { id: 5, name: "Building 5", position: [59.131309, 11.387104], sensorData: { temperature: 19, humidity: 65, co2: 440 } },
  { id: 6, name: "Building 6", position: [59.263889, 10.407611], sensorData: { temperature: 18, humidity: 70, co2: 450 } },
  { id: 7, name: "Building 7", position: [59.913869, 10.752245], sensorData: { temperature: 17, humidity: 75, co2: 460 } },
  { id: 8, name: "Building 8", position: [59.950015, 10.756362], sensorData: { temperature: 16, humidity: 80, co2: 470 } },
  { id: 9, name: "Building 9", position: [59.923043, 10.752839], sensorData: { temperature: 15, humidity: 85, co2: 480 } },
  { id: 10, name: "Building 10", position: [59.939095, 10.719008], sensorData: { temperature: 14, humidity: 90, co2: 490 } },
];

const Index = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  return (
    <Container maxW="100vw" maxH="100vh" p={0} m={0}>
      <MapContainer center={[59.911491, 10.757933]} zoom={5} style={{ height: "100vh", width: "100vw" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {buildings.map((building) => (
          <Marker
            key={building.id}
            position={building.position}
            eventHandlers={{
              click: () => {
                setSelectedBuilding(building);
              },
            }}
          >
            <Popup>{building.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <BuildingInfoCard building={selectedBuilding} />
    </Container>
  );
};

export default Index;