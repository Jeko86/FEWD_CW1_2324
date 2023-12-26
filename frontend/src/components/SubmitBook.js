import React, { useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import BookContext from "./BookContext";
import Button from 'react-bootstrap/Button';

export default function BookInput({ position }) {

  let positionInMenu = JSON.stringify(position);
  const [nameField, setNameField] = useLocalStorage(`$positionInMenu_name`, "");
  const [dateField, setDateField] = useLocalStorage(`$positionInMenu_date`, "");
  const [nightsNumField, setNightsNumField] = useLocalStorage(`$positionInMenu_nightsNum`, "");
  const [hostelSelected] = useContext(BookContext);//hostel selected
  const [itineraries, setItineraries] = useLocalStorage(`${positionInMenu}_data`, []); 

  const handleNameChange = (e) => {
    setNameField(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateField(e.target.value);
  };

  const handleNightsNumChange = (e) => {
    setNightsNumField(e.target.value);
  };

  const handleSubmit = () => {
    // Check if required fields are empty
    if (!nameField || !dateField || !nightsNumField || !hostelSelected) {
      // Display an error message or handle it as per your requirement
      alert("Please fill in all the required fields");
      return;
    }

    const newStage = {
      stage: itineraries.length + 1,
      hostel: hostelSelected,
      nights: parseInt(nightsNumField, 10),
    };

    const newData = {
      user: nameField,
      startdate: new Date(dateField),
      stages: [newStage],
    };

    setNameField("");
    setDateField("");
    setNightsNumField("");
   
    // Update the itineraries array
    setItineraries([...itineraries, newData]);
  };

  //remove inserted data from the text and date fields only
  const handleDelete = () => {
    setNameField("");
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
        value={nameField}
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
