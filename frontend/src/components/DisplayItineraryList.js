import React, { useState } from "react";
import { Card, Form, Button, CardBody, CardText, CardTitle, Modal} from 'react-bootstrap';
import StarRating from "./stars";
import { useLocalStorage } from './useLocalStorage';

const DisplayItineraryList = () => {
  const [storedData, setStoredData] = useLocalStorage("undefined_data", []);
  const [reviewerName, setReviewerName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  const handleReviewSubmit = (index) => {
    // Check if required fields are empty
    if (!reviewerName  || !reviewText) {
      // Display an error message or handle it as per your requirement
      alert("Please fill in all the required fields");
      return;
    }

    const updatedData = [...storedData];
    updatedData[index].review = { reviewerName, reviewText };

    // Update the local storage with the new data including the review
    setStoredData(updatedData);

    // Clear the input fields
    setReviewerName('');
    setReviewText('');

    // Show the modal
    setShowModal(true);
  };

  const handleCloseModal = () => {
    // Close the modal
    setShowModal(false);
  };

  return (
    <div>
      {storedData.map((item, index) => (
        <Card key={index} style={{ marginBottom: '10px' }}>
          <Card.Body>            
            <Card.Title>stage {item.stage}</Card.Title>
            <Card.Text>                    
              <strong>Hostel:</strong> {item.selectedBook[0].name}<br />  
              <strong>Start date:</strong> {formatDate(item.date)}<br />
              <strong>N. nights:</strong> {item.nightsNumField}<br /> 
              <p><StarRating position={index} /></p>
              
              <Card style={{marginTop: '10px'}}>
                <CardBody>
                  <CardTitle>Write review</CardTitle>
                  <CardText>                   
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
                  </CardText>
                </CardBody>
              </Card>                              
            </Card.Text>
          </Card.Body>
        </Card>
      ))}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Review Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Thank you for your review!</strong>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DisplayItineraryList;