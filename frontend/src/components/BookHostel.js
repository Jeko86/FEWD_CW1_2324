import React, {useState} from "react";
import BookContext from "./BookContext";
import BookSummary from "./BookSummary";


const BookHostel = ({hostels}) => {
  const[selectHostel, setSelectHostel] = useState([]);
  const handleClick = (e, selectedItem) => {
    let newState = [...selectHostel, selectedItem];
    setSelectHostel(newState);
  };
  return(
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 submenu ">
            <h2 className=" justify-content-left headingStyleLeft">Select Hostel</h2>                          
              <ul className="list-group">
                {hostels.map((hostels) => (
                  <li className="menu-list list-group-item" key={hostels.id} onClick={(e) => handleClick(e, hostels.name)}>
                    {hostels.name}
                  </li>
                ))}
              </ul>
          </div>
          <BookContext.Provider value={[selectHostel, setSelectHostel]}>
            <div className="col-3">
              <BookSummary />
            </div>
            <div></div>
          </BookContext.Provider> 
          </div>
      </div>          
    </>
  );   
};

export default BookHostel;