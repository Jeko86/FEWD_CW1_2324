import React from "react";
import useFetchData from "./UseFetchData";
import BookHostel from "./BookHostel";

const DisplayHostelList = () => {
    const {status, hostels} = useFetchData();
    if (status==='fetched')
    return (
        <div className="container-fluid">
          <div className="row">
            <div >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ marginLeft: '10px' }}>test</h3>
                <BookHostel hostels={hostels} />                 
              </div>
              
            </div>                         
          </div>     
        </div>
      );
  };


  export default DisplayHostelList;
  

