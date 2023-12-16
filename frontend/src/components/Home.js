import React from "react";
import useFetchData from "./UseFetchData"
import Search from "./SearchHotels";
import Map from "./Map";

const Home = () => {
    const {status, hostels} = useFetchData();
    if (status==='fetched')
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col"><h3>Who we are</h3>
              <p>Page introduction???</p>
              
            </div>
            <div className="col"><h3>Find Hostels on the map</h3>
            <Map hostels={hostels}/> 
            </div>
              <div className="col">
              <h3>Explore Hostels</h3>
                <Search hostel={hostels} />
              </div> 
          </div>
        </div>
      );
  };
  
export default Home;
