import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { MdOutlineLocalCafe } from "react-icons/md";

// Function to calculate the average of an array of numbers
const calculateAverage = (ratings) => {
  if (ratings.length === 0) {
    return 0;
  }
  const sum = ratings.reduce((total, rating) => total + rating, 0);
  return sum / ratings.length;
};

//pass the information of the hostels array to the HostelItem 
//each ellement of the array is an objet and it is used dot notation to access to properties to display
const HostelInfo = ({ hostel, index }) => {

  // Calculate the average rating
  const averageRating = calculateAverage(hostel.ratings);

  return (
    <div>
      <Accordion.Header><strong>{hostel.id}. {hostel.name} </strong></Accordion.Header>

      <Accordion.Body>

        <p><strong>Address:</strong> {hostel.address} {hostel.postcode}</p>
            
        <p><strong>email:</strong>{hostel.email}</p>

        <p>{hostel.cafe === true ? (<strong>Facilities: <MdOutlineLocalCafe /> </strong>) : (<strong>Facilities: - </strong>)} </p>

        <p><strong>Overall rating:</strong> {averageRating.toFixed()}</p>

      </Accordion.Body>
    </div> 
  );
};
export default HostelInfo;