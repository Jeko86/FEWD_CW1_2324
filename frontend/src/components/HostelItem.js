import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Stars from "./stars";

//pass the information of of the hostells array to the HostelItem 
//each ellement of hte array is an objet and it is used dot notation to access to properties to display
const HostelItem = ({ hostel, index }) => {
  return (
    <div>
      <Accordion.Header>{hostel.name}</Accordion.Header>
      <Accordion.Body>
        <p>Address: {hostel.address}</p>
        <p>Postcode: {hostel.postcode}</p>
        <Stars position={index} />
      </Accordion.Body>
    </div>
  );
};
export default HostelItem;


