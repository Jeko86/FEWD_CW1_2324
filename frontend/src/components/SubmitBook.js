import React, { useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import BookContext from "./BookContext";
import Button from 'react-bootstrap/Button';

export default function BookInput({ position }){

  const positionInMenu = JSON.stringify(position);
  const [userField, setUserField] = useLocalStorage(`$positionInMenu_user`, "");
  const [dateField, setDateField] = useLocalStorage(`$positionInMenu_date`, ""); // New state for date input
  const [nightsNumField, setNightsNumField] = useLocalStorage(`$positionInMenu_nightsNum`, "");
  const [hostel] = useContext(BookContext);
  const [itineraries, setItineraries] = useLocalStorage(`${positionInMenu}_itineraries`, []);
    

  const handleUserChange = (e) => {
    setUserField(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateField(e.target.value);
  };

  const handleNightsNumChange = (e) => {
    setNightsNumField(e.target.value);
  };

  const newStage = {
    stage: itineraries.length + 1,
    hostel: hostel,
    nights: parseInt(nightsNumField, 10),
  };

  const handleSubmit = () => {
    const newData = {
      userField,
      date: dateField,
      stages: [newStage],
    };

    setUserField("");  
    setDateField("");
    setNightsNumField("");     
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
          onChange={handleUserChange}
        />
  
      <label>Start date:</label>
      <input
        className="form-control"
        type="date"
        value={dateField}
        onChange={handleDateChange}
      />
  
      <label>Number of nights:</label>
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
        
        <div style={{ maxHeight: '300px', overflow: 'auto' }}>
        <h3>Stored Data:</h3>
        <ul>
          {itineraries.map((item, index) => (
            <li key={index}>
              <p>Stage: {item.stages[0].stage}</p>
              <p>Name: {item.userField}</p>
              <p>Date: {item.date}</p>             
              <p>Hostel: {item.stages[0].hostel}</p>              
              <p>Number of Nights: {item.stages[0].nights}</p>
            </li>
          ))}
        </ul>
      </div>             
    </div>  
  );  
}
