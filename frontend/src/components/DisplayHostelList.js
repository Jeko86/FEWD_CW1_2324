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
      <ul>
        {storedData.map((item, index) => (
          <li key={index}>
            <strong>Name:</strong> {item.nameField}, <strong>Date:</strong> {item.date}, <strong>Nights:</strong> {item.nightsNumField}, <strong>Selected Book:</strong> {Array.isArray(item.selectedBook) ? item.selectedBook.join(", ") : item.selectedBook}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayHostelList;

