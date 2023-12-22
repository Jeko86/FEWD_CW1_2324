import React, { useState } from "react";
import DisplayHostelsItem from "./DisplayHostelsItem";
import Card from 'react-bootstrap/Card'; //co develop card
import { MdOutlineLocalCafe } from "react-icons/md";

function Search({ hostel }) {
    const [searchField, setSearchField] = useState("");

    const filtered = hostel.filter((entry) => {        
        return (
            entry.name.toLowerCase().includes(searchField.toLowerCase()) ||
            (searchField.toLowerCase() === 'cafe' && entry.cafe === true) ||
            entry.postcode.toLowerCase().includes(searchField.toLowerCase())            
        );
    });
    

    return (
        <div>
            <Card style={{ marginBottom: '15px' }}>
                <Card.Body>
                    <div>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search ..."
                            onChange={(e) => setSearchField(e.target.value)}
                        />
                    </div>
                    <div><h6>Filter by:</h6>
                        
                        <label className="checkboxContainer">                          
                            <p className="checkboxContainer"> 
                                <input type="checkbox" onChange={(e) => setSearchField(e.target.checked ? 'cafe' : '')}/>
                                Only show hostel with cafe  <MdOutlineLocalCafe/>
                            </p>
                            
                        </label>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{ marginTop: '15px' }}>
                <Card.Body>
                    <DisplayHostelsItem hostels={filtered} />
                </Card.Body>
            </Card>
        </div>
    );
}

export default Search;
