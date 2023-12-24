import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { MdOutlineLocalCafe } from "react-icons/md";


//pass the information of of the hostells array to the HostelItem 
//each ellement of hte array is an objet and it is used dot notation to access to properties to display
const HostelItem = ({ hostel, index }) => {
  return (
    <div>
      <Accordion.Header>{hostel.name}</Accordion.Header>
      <Accordion.Body>
        <p>Address: {hostel.address} {hostel.postcode}</p>
        
        {hostel.cafe === true ? (
          <p>Facilities: <MdOutlineLocalCafe /> </p>
        ) : (
          <p>Facilities: - </p>
        )}

      </Accordion.Body>
    </div>
  );
};
export default HostelItem;


