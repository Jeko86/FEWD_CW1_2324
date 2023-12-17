import React, { useState } from "react"; //Import the useState Hook
import DisplayHostelsItem from "./DisplayHostelsItem";

//to pass the data to Search it needs to amend the call so that the Search component is passed all the data about items on the menu
function Search({ hostel }) {
    //use the hook to set an initial state and define a function which will update that state
    const [searchField, setSearchField] = useState("");

    //function to loop through the list of menu items
    const filtered = hostel.filter((entry) => {        
        return (         
            entry.name.toLowerCase().includes(searchField.toLowerCase()) ||
            (searchField.toLowerCase() === 'cafe' && entry.cafe === true)||
            entry.postcode.toLowerCase().includes(searchField.toLowerCase())            
        );
    });
    
    
  return (
    <div>
        <div>
            <input
                //add an event handler to update the state when the text input changes
                className="form-control"
                type="text"
                placeholder="Search ..."
                onChange={(e) =>  setSearchField(e.target.value)}
            />
        </div>
        <DisplayHostelsItem hostels={filtered} />
    </div>
  
  );
}

export default Search;
