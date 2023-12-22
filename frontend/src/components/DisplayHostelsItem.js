import React from 'react';
import HostelItem from './HostelItem';
import Accordion from "react-bootstrap/Accordion";
import Stars from "./stars";

const DisplayHostelsItem = ({ hostels }) => {
    return (
      <Accordion>
        {hostels.map((hostel,index) => {
          return (
            <Accordion.Item eventKey={index} key={index}>
              <HostelItem hostel={hostel} />
              <Stars position={index} />
              <Accordion.Body>

                <p>Reviews:</p>
                <ul>
                  {hostel.reviews.map((review, reviewIndex) => (
                    
                    <li key={reviewIndex}>
                      <p>{review.reviewer}:{review.review}</p>
                    </li>

                  ))}

                </ul>
              </Accordion.Body>

            </Accordion.Item>            
          );
        })}
      </Accordion>
    );
  };
  export default DisplayHostelsItem;