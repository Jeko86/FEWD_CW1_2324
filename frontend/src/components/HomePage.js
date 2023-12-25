import React from "react";
import useFetchData from "./UseFetchData"
import Search from "./SearchHotels";



const Home = () => {
    const {status, hostels} = useFetchData();
    if (status ==='fetched')   
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ marginLeft: '10px' }}>Explore Hostels</h3>
                <Search hostel={hostels} />                 
              </div>
              
            </div>

            <div className="col-md-3">
              <h3>Book Hostel</h3>             
            </div>                           
          </div>     
        </div>
      );
  };
  
export default Home;
