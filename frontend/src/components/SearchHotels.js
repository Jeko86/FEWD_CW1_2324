import React, { useState } from "react";
import DisplayHostelsInfo from "./DisplayHostelsInfo";
import Card from 'react-bootstrap/Card';
import Map from "./Map";

function Search({ hostel }) {
    const [searchField, setSearchField] = useState("");
    const [showCafeHostels, setShowCafeHostels] = useState(false);

    const filtered = hostel.filter((entry) => {
        if (showCafeHostels) {
            return entry.cafe === true;
        }

        return (
            entry.name.toLowerCase().includes(searchField.toLowerCase()) ||
            entry.postcode.toLowerCase().includes(searchField.toLowerCase())
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
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
                            <div>
                                <h6>Filter by:</h6>
                                <label className="checkboxContainer">
                                    <p className="checkboxContainer">
                                        <input
                                            type="checkbox"
                                            onChange={(e) => setShowCafeHostels(e.target.checked)}
                                        />
                                        Only show hostels with cafe.
                                    </p>
                                </label>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ marginTop: '15px' }}>
                        <Card.Body>
                            <DisplayHostelsInfo hostels={filtered} />
                        </Card.Body>
                    </Card>   
                </div>
                <div className="col-md-8" style={{ height: '400px' }}>
                    <Map hostels={filtered}/>
                </div>
            </div>
        </div>

        
            
    );
}

export default Search;

