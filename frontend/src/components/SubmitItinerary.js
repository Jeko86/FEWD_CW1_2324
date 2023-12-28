import React, { useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import ItineraryContext from "./ItineraryContext";
import Button from 'react-bootstrap/Button';

let stageCounter = 1; // Counter for the stage number

export default function ItineraryInput({ position }){
  const positionInMenu = JSON.stringify(position);
  const [dateField, setDateField] = useLocalStorage(`$positionInMenu_date`, ""); // New state for date input
  const [nightsNumField, setNightsNumField] = useLocalStorage(`$positionInMenu_nightsNum`, "");
  const [itinerary, setItinerary] = useLocalStorage(`${positionInMenu}_data`, []);
  const [hostelSelected] = useContext(ItineraryContext);

 
  const handleDateChange = (e) => {
    setDateField(e.target.value);
  };

  const handleNightsNumChange = (e) => {
    setNightsNumField(e.target.value);
  };
      

  const handleSubmit = () => {
    // Check if required fields are empty
    if (!dateField || !nightsNumField || !hostelSelected) {
      // Display an error message or handle it as per your requirement
      alert("Please fill in all the required fields");
      return;
    }
      
    const newData = {
      stage: stageCounter++,
      date: dateField,
      nightsNumField,
      selectedBook: hostelSelected,
    };
 
    setDateField("");
    setNightsNumField("");    
    setItinerary([...itinerary, newData]); 
         
  };

  //remove inserted data from the text and date fields only
  const handleDelete = () => {
    setDateField("");
    setNightsNumField("");
  };

  return (
    <div>

    
        <label>Choose a date:</label>
        <input
          className="form-control"
          type="date"
          value={dateField}
          onChange={handleDateChange}
        />
    
        <label>N. nights:</label>
        <input
          className="form-control"
          type="text"
          value={nightsNumField}
          onChange={handleNightsNumChange}
        />
    
        <div className="d-grid gap-2" style={{ marginTop: '10px' }}>
          <Button variant="success" size="sm" onClick={handleSubmit}> Confirm </Button>
          <Button variant="danger" size="sm" onClick={handleDelete}> Delete </Button>
        </div>
    </div>
  );   
}