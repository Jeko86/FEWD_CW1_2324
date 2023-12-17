import React, { useContext, useState} from "react";
import BookContext from "./BookContext";


const SubmitBook = () => {
    const [book, setBook] = useContext(BookContext);
    

    return (
        <div>
        <h2>Submit Book</h2>
        <label> Enter your name:</label>
        <input
            className="form-control"
            type="text"
            placeholder="Enter your name here ..."
        />
        <label> Enter your table number ;"</label>
        <input
            className="form-control"
            type="text"
            placeholder="Enter your table number here ..."
        />
        </div>
    );
};
export default SubmitBook;
