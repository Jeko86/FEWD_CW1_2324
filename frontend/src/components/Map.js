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

        {hostels.map((Hostels) => (
            <Marker           
                key={Hostels.id}
                position={[
                    Hostels.location.lat, 
                    Hostels.location.long,
                ]}
                icon={icon}

                eventHandlers={{ click: () => markerClicked(Hostels) }}  
            >
                <Popup>
                    <div className="popup" role="alert">

                        Here is the location of the {Hostels.name} <br />
                        Address:{Hostels.address}
                    </div>
                </Popup>
            </Marker>
        ))}

        </MapContainer>            
            <div className="info">The Hostel you have currently selected is {activeHostel.name}.</div>
        </>
    );
};
export default Map;



