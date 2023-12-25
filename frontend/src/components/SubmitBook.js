import React, { useContext, useState } from "react";
import BookContext from "./BookContext";
import Modal from "./Modal";
import useModal from "./useModal";

const SubmitBook = () => {
  const [order, setOrder] = useContext(BookContext);
  const [nameField, setNameField] = useState("");
  const [dateField, setDateField] = useState(''); // New state for date input
  const [nightsNumField, setNightsNumField] = useState("");
  const [message, setMessage] = useState("");
  const [isShowingModal, toggleModal] = useModal();

  const addOrder = () => {
    let newOrder = [nameField,dateField, nightsNumField, ...order];
    const orderString = JSON.stringify(newOrder);
    fetch(`http://localhost:3000/itineraries/new`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*     ",
        "Content-Type": "application/json",
      },
      body: orderString,
    })
      .then(() => {
        setMessage(
          "Hi " +
            nameField +
            " thank you for your to book this hostel. You've booked " +
            order
        );
        setOrder([]);
        setNameField("");
        setDateField('');
        setNightsNumField("");
        toggleModal(message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>      
      <label> Enter your name:</label>
      <input
        className="form-control"
        type="text"
        placeholder="Enter your name here ..."
        value={nameField}
        onChange={(e) => setNameField(e.target.value)}
      />

      <label>Choose a date:</label>
      <input
        className="form-control"
        type="date"
        value={dateField}
        onChange={(e) => setDateField(e.target.value)}
      />

      <label>N. nights:</label>
      <input
        className="form-control"
        type="text"
        value={nightsNumField}
        onChange={(e) => setNightsNumField(e.target.value)}
      />

      <button className="button btn btn-primary" onClick={addOrder}>
        Submit order
      </button>
      <div className="modalContainer">
        <Modal
          show={isShowingModal}
          onCloseButtonClick={toggleModal}
          message={message}
        />
      </div>
    </div>
  );
};
export default SubmitBook;
