import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';
import Stars from './stars';

const DisplayItineraryList = () => {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage
    const storedDataString = localStorage.getItem("undefined_data");

    if (storedDataString) {
      const parsedData = JSON.parse(storedDataString);
      setStoredData(parsedData);
    }
  }, []);

  return (
    <div>
      {storedData.map((item, index) => (
        <Card key={index} style={{ marginBottom: '10px' }}>
          <Card.Body>
            <Card.Title>stage {item.stage}</Card.Title>
            <Card.Text>                    
              <strong>Hostel:</strong> {item.selectedBook[0].name}<br />  
              <strong>Start date:</strong> {item.date}<br />
              <strong>N. nights:</strong> {item.nightsNumField}<br /> 
              <p><Stars position={index} /></p>           
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default DisplayItineraryList;
