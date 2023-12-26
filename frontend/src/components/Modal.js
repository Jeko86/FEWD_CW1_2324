const Modal = ({ show, onCloseButtonClick, message }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div>
           
        <div>
          <div>
            {message}
          </div>
          <div>
            <button onClick={onCloseButtonClick}>X</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;