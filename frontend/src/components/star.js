import React from "react";
import {LuCoffee} from "react-icons/lu";

export default function Star( props) {
  console.log (props.selected)
  return <LuCoffee 
        color={props.selected ? "#7863FE" : "#dddddd"}
        onClick={props.onSelect} 
        />;
}
  
