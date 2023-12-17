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
  const position = [55.86639, -4.24919];


    const markerClicked = (hostels) => {   
        setActiveHostel(hostels)
    }

    return (
        <>
        <MapContainer
            center={position}
            zoom={9}
            scrollWheelZoom={true}
            className="map"
        >

        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {hostels.map((hostels) => (
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

                        Here is the location of the {hostels.name} <br />
                        Address:{hostels.address}
                    </div>
                </Popup>
            </Marker>
        ))}

        </MapContainer>            
            <div className="info">Hostel {activeHostel.name}: {activeHostel.description}</div>
        </>
    );
};
export default Map;



