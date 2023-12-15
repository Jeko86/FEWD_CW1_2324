import React, { useState } from "react";
import DisplayHostels from "./DisplayHostels";

function Search({ hostel }) {
    const [searchField, setSearchField] = useState("");

    const filtered = hostel.filter((entry) => {        
        return entry.name.toLowerCase().includes(searchField.toLowerCase())|| entry.description.toLowerCase().includes(searchField.toLowerCase());
    });
    
  return (

    <div>
        <div>
            <input
                className="form-control"
                type="text"
                placeholder="Search ..."
                onChange={(e) =>  setSearchField(e.target.value)}
            />
        </div>
        <DisplayHostels hostels={filtered} />
    </div>
  
  );
}

export default Search;
