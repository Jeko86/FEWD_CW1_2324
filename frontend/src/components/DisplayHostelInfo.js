import React, { useState } from "react";
import { Button, Accordion, Card } from 'react-bootstrap';
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
      <div className="col-md-7">
        <Card style={{marginBottom: '10px'}}>
          <Card.Body>
            <Accordion style={{ maxHeight: '530px', overflow: 'auto'}}>
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
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-5">
        {/* Card for ItineraryInput */}
        <Card style={{ marginBottom: '10px' }}>
          <Card.Body>
            <ItineraryContext.Provider value={[selectHostel, setSelectHostel]}>
              <ItineraryInput hostels={selectHostel} />
            </ItineraryContext.Provider>
          </Card.Body>
        </Card>

        {/* Card for ItinerarySummary */}        
        <ItineraryContext.Provider value={[selectHostel, setSelectHostel]} >
          <ItinerarySummary hostels={selectHostel} />
        </ItineraryContext.Provider>
      </div>
    </div>
  );
};

export default DisplayHostelInfo;
