import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarAverage({ averageRating }) {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1 <= averageRating);

  return (
    <div>
      {stars.map((selected, index) => (
        <FaStar
          key={index}
          color={selected ? "red" : "gray"}
        />
      ))}
    </div>
  );
}