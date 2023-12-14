import React from 'react';
import HostelItem from './HostelItem';
import Accordion from "react-bootstrap/Accordion";

const DisplayHostels = ({ hostels }) => {
    return (
      <Accordion>
        {hostels.map((hostels,index) => {
          return (
            <Accordion.Item eventKey={index} key={index}>
              <HostelItem hostel={hostels} />
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  };
  export default DisplayHostels;