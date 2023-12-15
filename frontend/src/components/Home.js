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
        <p>We are a small local chain of cafes specialising in simple, wholesome, locally sourced dishes.</p>
        <p>A homegrown business, we proved so popular we outgrew our original location and expanded to meet demand. Increased size means we can offer even better value across the Central belt.</p>
          <p>We take pride in providing straightforward, good value food.</p>
          <p>This branch was the first to open in 2016. Since then we have expanded to three other locations - all providing freshly cooked, locally sourced food. We aim to be as sustainable as possible. </p> 
          <p> We are especially proud of our absolutely delicious traditional Italian dishes! Super fresh and indulgent. </p>
          <p> Not to mention our fabulous friendly staff - we look forward to welcoming you soon.</p>
         </div>
        <div className="col"><h3>Find Hostels on the map</h3>
        <Map/> 
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
