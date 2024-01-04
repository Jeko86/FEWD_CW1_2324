import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ItineraryContext from "./ItineraryContext";
import HostelInfo from "./HostelInfo";
import ItinerarySummary from "./ItinerarySummary";
import ItineraryInput from "./SubmitItinerary";


const DisplayHostelInfo = ({ hostels }) => {
  const [selectHostel, setSelectHostel] = useState([]);

  const handleClick = (e, selectedItem) => {
    let newState = [...selectHostel, selectedItem];
    setSelectHostel(newState);
  };
  
  return (
    <div className="row">
      <div className="col-md-7" style={{ maxHeight: '500px', overflow: 'auto' }}>
        <Accordion>
          {hostels.map((hostel, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <HostelInfo hostel={hostel} />
              <div style={{ marginLeft: '20px' }}></div>
              <Accordion.Body>
                <div className="d-grid gap-2" style={{ marginTop: '10px' }}>
                  <Button
                    variant="secondary"
                    size="sm"
                    key={hostel.id}
                    onClick={(e) => handleClick(e, { id: hostel.id, name: hostel.name, position: [hostel.location.lat, hostel.location.long] })}
                  > Select Hostel
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      <div className="col-md-5">
        <ItineraryContext.Provider value={[selectHostel, setSelectHostel]}>
          {/* Pass only the necessary data to ItinerarySummary and SubmitItinerary */}
          <ItinerarySummary hostels={selectHostel} />
          <ItineraryInput hostels={selectHostel}  />
        </ItineraryContext.Provider>
      </div>
    </div>
  );
};

export default DisplayHostelInfo;
