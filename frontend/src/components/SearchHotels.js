import React, { useState } from "react";
import DisplayHostelInfo from "./DisplayHostelInfo";
import Card from 'react-bootstrap/Card';
import Map from "./Map";

function Search({ hostel }) {
    const [searchField, setSearchField] = useState("");
    const [showCafeHostels, setShowCafeHostels] = useState(false);

    const filtered = hostel.filter((entry) => {
        const includesSearch = entry.name.toLowerCase().includes(searchField.toLowerCase()) ||
            entry.postcode.toLowerCase().includes(searchField.toLowerCase());

        const includesCafe = showCafeHostels ? entry.cafe === true : true;

        return includesSearch && includesCafe;
    });

    return (
        <div className="row">
            <div className="col-md-7">
                <h3>Explore Hostel on the map</h3>
                <Map hostels={filtered} />
            </div>

            <div className="col-md-5">
                <h3>Search Hostel and create an itinerary</h3>
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
                        <DisplayHostelInfo hostels={filtered} />
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Search;
