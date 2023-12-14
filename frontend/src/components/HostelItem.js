import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const HostelItem = ({ hostel }) => {
  return (
    <div>
      <Accordion.Header>{hostel.name}</Accordion.Header>
      <Accordion.Body>
        <p>Address: {hostel.address}</p>
        <p>Postcode: {hostel.postcode}</p>
      </Accordion.Body>
    </div>
  );
};
export default HostelItem;