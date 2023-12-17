import React from "react";
import useFetchData from "./UseFetchData";
import BookHostel from "./BookHostel";

const DisplayHostelList = () => {
    const {status, hostels} = useFetchData();
    if (status==='fetched')
    return (
      <div>
        <BookHostel hostels={hostels} /> 
      </div>
    );
    return<p>There is currently an issue displaying the hostels list</p>
  };
  export default DisplayHostelList;
  

