import React from "react";
import useFetchData from "./UseFetchData"
import Search from "./SearchHotels";

const Home = () => {
    const {status, hostels} = useFetchData();
    if (status ==='fetched')   
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Search hostel={hostels} />                 
              </div>              
            </div>                         
          </div>     
        </div>
      );
  };
  
export default Home;
