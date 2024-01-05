import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { Icon } from "leaflet";
import Button from 'react-bootstrap/Button';

const MapItineraries = () => {
  const icon = new Icon({
    iconUrl: "/markerIcon.svg",
    iconSize: [30, 30],
  });

  const [activeHostel, setActiveHostel] = useState({});
  const [positions, setPositions] = useState([]);
  const [selectedMarkers, setSelectedMarkers] = useState([]);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage
    const storedDataString = localStorage.getItem("undefined_data");

    if (storedDataString) {
      const parsedData = JSON.parse(storedDataString);
      // Extract positions from stored data
      const positionsArray = parsedData.map((item) => [
        item.selectedBook[0].id,
        item.selectedBook[0].name,
        item.selectedBook[0].position,
      ]);
      setPositions(positionsArray);
    }
  }, []);

  const markerClicked = (position) => {
    // Find the corresponding hostel based on position
    const hostel = positions.find(
      (pos) => pos[2].join(",") === position.join(",")
    );
    setActiveHostel({ id: hostel[0], name: hostel[1] });

    // Add the clicked marker to the selectedMarkers array
    setSelectedMarkers((prevMarkers) => [...prevMarkers, position]);

    // If there are at least two markers, update the lines array
    if (selectedMarkers.length >= 1) {
      setLines([...lines, [selectedMarkers[selectedMarkers.length - 1], position]]);
    }
  };
  const clearLines = () => {
    setSelectedMarkers([]);
    setLines([]);
  };

  return (
    <>
      <MapContainer

        style={{ height: '78vh', marginBottom: '20px'}}
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
            position={position[2]}
            icon={icon}
            eventHandlers={{ click: () => markerClicked(position[2]) }}
          >
            <Popup>
              <div className="popup" role="alert">
                <h6>ID: {activeHostel.id}</h6>
                <h6>Name: {activeHostel.name}</h6>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Render lines */}
        {lines.map((line, index) => (
          <Polyline key={index} positions={line} color="blue" />
        ))}  
      </MapContainer> 

      <div className="d-grid gap-2" ><Button onClick={clearLines}variant="outline-info">Clear Lines</Button></div>    
    </>
  );
};

export default MapItineraries;
