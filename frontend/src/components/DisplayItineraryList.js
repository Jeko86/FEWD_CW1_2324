import React, { useState } from "react";
import { Card, Form, Button } from 'react-bootstrap';
import Stars from './stars';
import { useLocalStorage } from './useLocalStorage';

const DisplayItineraryList = () => {
  const [storedData, setStoredData] = useLocalStorage("undefined_data", []);
  const [reviewerName, setReviewerName] = useState('');
  const [reviewText, setReviewText] = useState('');

  const handleReviewSubmit = (index) => {
    const updatedData = [...storedData];
    updatedData[index].review = { reviewerName, reviewText };

    // Update the local storage with the new data including the review
    setStoredData(updatedData);

    // Clear the input fields
    setReviewerName('');
    setReviewText('');
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
                <Form.Group controlId={`reviewerName${index}`}>
                  <Form.Label>Your Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId={`reviewTextarea${index}`}>
                  <Form.Label>Write a Review:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Share your experience..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                  />
                </Form.Group>

                <div className="d-grid gap-2" style={{ marginTop: '10px' }}>
                  <Button variant="success" size="sm" onClick={() => handleReviewSubmit(index)}> Submit Review </Button>
                </div>
                
              </Form> 

              {/* Display Review */}

              {item.review && (
                <div>
                  <strong>Review by {item.review.reviewerName}:</strong><br />
                  {item.review.reviewText}
                </div>
              )}         
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default DisplayItineraryList;