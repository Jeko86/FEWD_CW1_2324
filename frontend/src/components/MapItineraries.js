import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip, Polyline } from "react-leaflet";
import { Icon, latLng } from "leaflet";
import Button from 'react-bootstrap/Button';
import { useLocalStorage } from "./useLocalStorage";

const MapItineraries = () => {
  const icon = new Icon({
    iconUrl: "/markerIcon.svg",
    iconSize: [30, 30],
  });

  // Use the useLocalStorage hook for managing positions
  const [itineraryData] = useLocalStorage("undefined_data", []);

  // Extract positions from stored data
  const positions = itineraryData.map((item) => item.selectedBook[0].position);

  // Other state variables
  const [selectedMarkers, setSelectedMarkers] = React.useState([]);
  const [lines, setLines] = React.useState([]);

  const markerClicked = (position) => {
    // Add the clicked marker to the selectedMarkers array
    setSelectedMarkers((prevMarkers) => [...prevMarkers, position]);

    // If there are at least two markers, update the lines array
    if (selectedMarkers.length >= 1) {
      const lastPosition = selectedMarkers[selectedMarkers.length - 1];
      const distanceInMiles = latLng(lastPosition).distanceTo(latLng(position)) / 1609.344; // Conversione diretta da metri a miglia

      // Display distance in miles
      console.log(`Distance between markers: ${distanceInMiles.toFixed(2)} miles`);

      setLines([...lines, { positions: [lastPosition, position], distance: distanceInMiles }]);
    }
  };

  const clearLines = () => {
    setSelectedMarkers([]);
    setLines([]);
  };

  return (
    <>
      <MapContainer
        style={{ height: '87vh', marginBottom: '20px'}}
        center={[57.480662, -4.211335]}
        zoom={7}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {positions.map((position, index) => (
          <Marker
            key={index}
            position={position}
            icon={icon}
            eventHandlers={{ click: () => markerClicked(position) }}
          >
            <Tooltip>{itineraryData[index].selectedBook[0].name}</Tooltip>
          </Marker>
        ))}

        {/* Render lines */}
        {lines.map((line, index) => (
          <Polyline key={index} positions={line.positions} color="green">
            <Tooltip permanent>
              <span>Distance: {line.distance.toFixed(2)} miles</span>
            </Tooltip>
          </Polyline>
        ))}
       <div className="d-grid gap-2" style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
        <Button onClick={clearLines} variant="danger">
          Clear Distance
        </Button>
      </div>
      </MapContainer>     
    </>
  );
};

export default MapItineraries;
