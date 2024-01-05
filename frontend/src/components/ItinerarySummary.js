import React, { useContext } from "react";
import ItineraryContext from "./ItineraryContext";
import CloseButton from 'react-bootstrap/CloseButton';

export default function ItinerarySummary() {
  const [itinerary, setItinarary] = useContext(ItineraryContext);
  const removeHostel = (e, hostels) => {
    let updatedItinerary = itinerary.filter((element) => {
      return element !== hostels;
    });
    setItinarary(updatedItinerary);
    
  };
  

  return (
    <div>
      <ul className = "list-group">
        {itinerary.map((hostels, index) => (
          <li className="order-list list-group-item d-flex justify-content-between align-items-center"  key={index} >
            {hostels.name}
            <CloseButton
              className="float-left"
              onClick={(e) => removeHostel(e, hostels)}
            />
            
          </li>
        ))}
      </ul>
    </div>
  );
}
