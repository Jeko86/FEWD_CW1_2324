import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';

const DisplayHostelList = () => {
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
            <Card.Title>{item.selectedBook}</Card.Title>
            <Card.Text>         
              <strong>Start date:</strong> {item.date}<br />
              <strong>N. nights:</strong> {item.nightsNumField}<br />            
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default DisplayHostelList;
