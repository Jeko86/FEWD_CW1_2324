import React, { useContext } from "react";
import BookContext from "./BookContext";

export default function BookSummary() {
  const [book, setOrder] = useContext(BookContext);
  const removeHostel = (e, hostel) => {
    let updatedOrder = book.filter((element) => {
      return element !== hostel;
    });
    setOrder(updatedOrder);
  };

  return (
    <div>
      <h2>Your Book</h2>
      <ul className = "list-group">
        {book.map((hostels, index) => (
          <li className="order-list  list-group-item"  key={index} onClick={(e) => removeHostel(e, hostels)}>
            {hostels}
          </li>
        ))}
      </ul>
    </div>
  );
}
