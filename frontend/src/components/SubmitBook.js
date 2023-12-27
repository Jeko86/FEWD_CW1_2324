import React, { useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import BookContext from "./BookContext";
import Button from 'react-bootstrap/Button';

export default function BookInput({ position }){
    const positionInMenu = JSON.stringify(position);
    const [nameField, setNameField] = useLocalStorage(`$positionInMenu_name`, "");
    const [dateField, setDateField] = useLocalStorage(`$positionInMenu_date`, ""); // New state for date input
    const [nightsNumField, setNightsNumField] = useLocalStorage(`$positionInMenu_nightsNum`, "");

    const [data, setData] = useLocalStorage(`${positionInMenu}_data`, []);
    const [book] = useContext(BookContext);

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
        const newData = {

            nameField,
            date: dateField,
            nightsNumField,
            selectedBook: book,
        };
        setNameField("");  
        setDateField("");
        setNightsNumField("");     
        setData([...data, newData]);       
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
            <Button variant="secondary" size="sm" onClick={handleSubmit}> Confirm </Button>
          </div>
 
        </div>
    );
}