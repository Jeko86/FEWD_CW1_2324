import React from "react";
import useFetchData from "./UseFetchData"
import DisplayHostels from "./DisplayHostels";

const DisplayHostelsList= () => {
  const { status, hostels } = useFetchData();
  if (status === "fetched")
    return (
      <div>
        {/* code to display food items here */}
        <DisplayHostels hostels = {hostels}/>
      </div>
    );
  return <p>There is currently an issue displaying the food menu</p>;
};

export default DisplayHostelsList;