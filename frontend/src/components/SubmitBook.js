import React, { useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import BookContext from "./BookContext";
import Button from 'react-bootstrap/Button';


export default function BookInput({ position }) {

  //let itinerary = JSON.stringify(position);
  const positionInMenu = JSON.stringify(position);
  const [userField, setUserField] = useLocalStorage(`$positionInMenu_user`, "");
  const [dateField, setDateField] = useLocalStorage(`$positionInMenu_date`, ""); // New state for date input
  const [nightsNumField, setNightsNumField] = useLocalStorage(`$positionInMenu_nightsNum`, "");
  const [hostel] = useContext(BookContext);
  const [itineraries, setItineraries] = useLocalStorage(`${positionInMenu}_itineraries`, []); 

  const handleNameChange = (e) => {
    setUserField(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateField(e.target.value);
  };
  

  const handleNightsNumChange = (e) => {
    setNightsNumField(e.target.value);
  };

  const handleSubmit = () => {
    // Check if required fields are empty
    if (!userField || !dateField || !nightsNumField || !hostel) {
      // Display an error message or handle it as per your requirement
      alert("Please fill in all the required fields");
      return;
    }

    const newStage = {
      stage: itineraries.length + 1,
      hostel: hostel,
      nights: parseInt(nightsNumField, 10),
    };

    const newData = {
      user: userField,
      startdate: new Date(dateField),
      stages: [newStage],
    };

    setUserField("");
    setDateField("");
    setNightsNumField("");
   
    // Update the itineraries array
    setItineraries([...itineraries, newData]);
  };

  //remove inserted data from the text and date fields only
  const handleDelete = () => {
    setUserField("");
    setDateField("");
    setNightsNumField("");
  };

  return (
    <div>
      <label> Enter your name:</label>
      <input
        className="form-control"
        type="text"
        placeholder="Enter your name here ..."
        value={userField}
        onChange={handleNameChange}
      />

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