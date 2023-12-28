import React from "react";
import useFetchData from "./UseFetchData"
import DisplayItineraryList from "./DisplayItineraryList";




const SummaryPage = () => {
    const {status, hostels} = useFetchData();
    if (status ==='fetched')   
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ marginLeft: '10px' }}>Itineraries summary</h3>
                <DisplayItineraryList hostel={hostels} />                 
              </div>              
            </div>                         
          </div>     
        </div>
      );
  };
  
export default SummaryPage;