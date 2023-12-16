import React from "react";
import Accordion from 'react-bootstrap/Accordion';

//pass the information of of the hostells array to the HostelItem 
//each ellement of hte array is an objet and it is used dot notation to access to properties to display
const HostelItem = ({ hostel }) => {
  return (
    <div>
      <Accordion.Header>{hostel.name}</Accordion.Header>
      <Accordion.Body>
        <p>Address: {hostel.address}</p>
        <p>Postcode: {hostel.postcode}</p>
        <p>lat: {hostel.location.lat}</p>
        <p>long: {hostel.location.long}</p>
      </Accordion.Body>
    </div>
  );
};
export default HostelItem;