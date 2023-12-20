import React from 'react';
import HostelItem from './HostelItem';
import Accordion from "react-bootstrap/Accordion";
import Stars from "./stars";

const DisplayHostelsItem = ({ hostels }) => {
    return (
      <Accordion>
        {hostels.map((hostels,index) => {
          return (
            <Accordion.Item eventKey={index} key={index}>
              <HostelItem hostel={hostels} />
              <Stars position={index} />
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  };
  export default DisplayHostelsItem;