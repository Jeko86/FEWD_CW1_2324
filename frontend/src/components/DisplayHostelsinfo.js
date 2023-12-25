import React from "react";
import HostelInfo from "./HostelInfo";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const DisplayHostelsInfo = ({ hostels }) => {
  
  return (
    <div style={{ maxHeight: '600px', overflow: 'auto' }}>
      <Accordion>
        {hostels.map((hostel, index) => {
          return (
            <Accordion.Item eventKey={index} key={index}>
              <HostelInfo hostel={hostel} />
              <Accordion.Body>
                <Card>
                  <Card.Body>
                    <p>Reviews:</p>
                    <ul>
                      {hostel.reviews.map((review, reviewIndex) => (
                        <li key={reviewIndex}>
                          <p>
                            {review.reviewer}:{review.review}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Accordion.Body>
              
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default DisplayHostelsInfo;
