import React, { useEffect } from "react";
import { Card, Form, Button } from 'react-bootstrap';
import Stars from './stars';
import { useLocalStorage } from './useLocalStorage'; // Update the path accordingly


const DisplayItineraryList = () => {
  const [storedData, setStoredData] = useLocalStorage("undefined_data", []);

  useEffect(() => {
    // You may want to load initial data from an API or other sources if needed
    // For now, let's assume your data is already populated
  }, []);

  const handleReviewSubmit = (index, review) => {
    const updatedData = [...storedData];
    updatedData[index].review = review;

    // Update the local storage with the new data including the review
    setStoredData(updatedData);
  };

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
              {/* Review section */}
              <Form>
                <Form.Group controlId={`reviewTextarea${index}`}>
                  <Form.Label>Write a Review:</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Share your experience..." />
                </Form.Group>
                <div className="d-grid gap-2" style={{ marginTop: '10px' }}>

                <Button variant="success" size="sm" onClick={() => handleReviewSubmit(index, document.getElementById(`reviewTextarea${index}`).value)}>
                  Submit Review
                </Button>
                </div>

              </Form>          
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default DisplayItineraryList;