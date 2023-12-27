import React, { useState, useEffect } from "react";

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
      <h2>Stored Data</h2>
      <ul>
        {storedData.map((item, index) => (
          <li key={index}>
            <strong>Name:</strong> {item.nameField}, <strong>Date:</strong> {item.date}, <strong>Nights:</strong> {item.nightsNumField}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayHostelList;

