import React from "react";
import useFetchData from "./UseFetchData";
import DisplayItineraryList from "./DisplayItineraryList";
import MapItineraries from "./MapItineraries";

const SummaryPage = () => {
  const { status, hostels } = useFetchData();

  if (status === 'fetched') {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3" style={{ maxHeight: '750px', marginBottom:'10px', overflow: 'auto' }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 style={{ marginLeft: '10px' }}>Itineraries summary</h3>
              <DisplayItineraryList hostels={hostels} />
            </div>
          </div>
          <div className="col">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 style={{ marginLeft: '10px' }}>Itineraries Map</h3>
              <MapItineraries hostels={hostels} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>Loading...</div>
    );
  }
};

export default SummaryPage;