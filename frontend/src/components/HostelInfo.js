import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { MdOutlineLocalCafe } from "react-icons/md";
import StaticStars from "./StaticStars";
import Card from 'react-bootstrap/Card';


const calculateAverage = (ratings) => {
  if (ratings.length === 0) {
    return 0;
  }
  const sum = ratings.reduce((total, rating) => total + rating, 0);
  return sum / ratings.length;
};

const HostelInfo = ({ hostel, index }) => {
  const averageRating = calculateAverage(hostel.ratings);

  return (
    <div>
      <Accordion.Header><strong> {hostel.name} </strong></Accordion.Header>
      <Accordion.Body>
        <p><strong>Address:</strong> {hostel.address} {hostel.postcode}</p>
        <p><strong>Email:</strong> {hostel.email}</p>
        <p>{hostel.cafe === true ? (<strong>Facilities: <MdOutlineLocalCafe /> </strong>) : (<strong>Facilities: - </strong>)}</p>
        <p><strong>Overall rating:</strong> <StaticStars averageRating={averageRating.toFixed()}/> </p> 

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
    </div>
  );
};

export default HostelInfo;