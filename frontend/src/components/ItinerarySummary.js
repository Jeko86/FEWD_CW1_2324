import React, { useContext } from "react";
import ItineraryContext from "./ItineraryContext";

export default function ItinerarySummary() {
  const [itinerary, setItinarary] = useContext(ItineraryContext);
  const removeHostel = (e, hostel) => {
    let updatedItinerary = itinerary.filter((element) => {
      return element !== hostel;
    });
    setItinarary(updatedItinerary);
  };

  return (
    <div>
      <ul className = "list-group">
        {itinerary.map((hostels, index) => (
          <li className="order-list  list-group-item"  key={index} onClick={(e) => removeHostel(e, hostels)}>
            {hostels.name} 
          </li>
        ))}
      </ul>
    </div>
  );
}
