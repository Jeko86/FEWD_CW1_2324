import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { MdOutlineLocalCafe } from "react-icons/md";
import Stars from './stars';


//pass the information of the hostells array to the HostelItem 
//each ellement of the array is an objet and it is used dot notation to access to properties to display
const Hostel_Info = ({ hostel, index }) => {
  return (
    <div>
      <Accordion.Header>{hostel.name}</Accordion.Header>

      <Accordion.Body>
        <Stars position={index} /> 

        <p>Address: {hostel.address} {hostel.postcode}</p>
            
        {hostel.cafe === true ? (<p>Facilities: <MdOutlineLocalCafe /> </p>) : (<p>Facilities: - </p>)}

      </Accordion.Body>
    </div> 
  );
};
export default Hostel_Info;


