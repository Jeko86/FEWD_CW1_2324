import React, {useState} from "react";
import HostelInfo from "./HostelInfo";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BookContext from "./BookContext";
import BookSummary from "./BookSummary";
import SubmitBook from "./SubmitBook";

const DisplayHostelsInfo = ({ hostels }) => {
  const [selectHostel, setSelectHostel] = useState([]);

  const handleClick = (e, selectedItem) => {
    let newState = [...selectHostel, selectedItem];
    setSelectHostel(newState);
  };
  
  return (
    <div className="row">
      <div className="col-md-7" style={{ maxHeight: '600px', overflow: 'auto' }}>
        <Accordion>
          {hostels.map((hostel, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <HostelInfo hostel={hostel} />
              <Accordion.Body>
                <Card>
                  <Card.Body>
                    <p>Reviews:</p>
                    <ul>
                      {hostel.reviews.map((review, reviewIndex) => (
                        <li key={reviewIndex}>
                          <p>
                            {review.reviewer}:{review.review}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>

                <div className="d-grid gap-2" style={{ marginTop: '10px' }}>
                  <Button
                    variant="secondary"
                    size="sm"
                    key={hostel.id}
                    onClick={(e) => handleClick(e, hostel.name)}
                  >
                    Book Hostel
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      <div className="col-md-5">
        <BookContext.Provider value={[selectHostel, setSelectHostel]}>
          <div className="row">
            <div className="col-md-12" style={{ marginTop: '10px' }}>
              <BookSummary />
            </div>

            <div className="col-md-12">
              <SubmitBook />
            </div>
          </div>
        </BookContext.Provider>
      </div>
    </div>
  );
};

export default DisplayHostelsInfo;
