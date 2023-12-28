import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const Map = ({ hostels }) => {
    
  const icon = new Icon({
    iconUrl: "/markerIcon.svg",//new icon
    iconSize: [30, 30],
  });


  const initialMarker =  {};
  const [activeHostel, setActiveHostel] = useState(initialMarker);
  const position = [57.480662, -4.211335];


    const markerClicked = (hostels) => {   
        setActiveHostel(hostels)
    }

    return (
        <>
        <MapContainer style={{ height: '60vh', marginBottom: '20px'}}
            center={position}
            zoom={7}
            scrollWheelZoom={true}
            class="map"
        >

        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {hostels.map((hostels, index) => (
            <Marker           
                key={hostels.id}
                position={[
                    hostels.location.lat, 
                    hostels.location.long,
                ]}
                icon={icon}

                eventHandlers={{ click: () => markerClicked(hostels) }}  
            >
                <Popup>
                    <div className="popup" role="alert">
                        <h6>{hostels.name}</h6>                        
                    </div>
                </Popup>
            </Marker>
        ))}

        </MapContainer>  

        <div className="info" style={{ height: 'auto' }}>
            <strong>{activeHostel.name}</strong>  
            <p>{activeHostel.description}</p></div>          
        </>
    );
};
export default Map;