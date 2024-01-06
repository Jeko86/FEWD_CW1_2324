import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { MdOutlineLocalCafe } from "react-icons/md";
import StaticStars from "./StaticStars";
import Card from 'react-bootstrap/Card';
import { useLocalStorage } from './useLocalStorage';

const calculateAverage = (ratings) => {
  if (ratings.length === 0) {
    return 0;
  }
  const sum = ratings.reduce((total, rating) => total + rating, 0);
  return sum / ratings.length;
};

const HostelInfo = ({ hostel, index }) => {
  const averageRating = calculateAverage(hostel.ratings);

  // Retrieve reviewData from local storage
  const [reviewData] = useLocalStorage("undefined_data", []);
  console.log('array: ',reviewData )

  // Filter reviews for the current hostel
  const userReview = reviewData.filter((item) => item.selectedBook[0].id === hostel.id);

  console.log('reviewData:', userReview);

  return (
    <div>
      <Accordion.Header><strong> {hostel.name} </strong></Accordion.Header>
      <Accordion.Body>
        <p><strong>Address:</strong> {hostel.address} {hostel.postcode}</p>
        <p><strong>Email:</strong> {hostel.email}</p>
        <p>{hostel.cafe === true ? (<strong>Facilities: <MdOutlineLocalCafe /> </strong>) : (<strong>Facilities: - </strong>)}</p>
        <p><strong>Overall rating:</strong> <StaticStars averageRating={averageRating.toFixed(2)}/> </p> 

        <Card>
          <Card.Body>
            <p>Reviews:</p>
            <ul>
              {userReview.map((review, reviewIndex) => (
                <li key={reviewIndex}>
                  <p>
                    <strong>{review.review.reviewerName}:</strong><br />
                    {review.review.reviewText}
                  </p>
                </li>
              ))}
            </ul>
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