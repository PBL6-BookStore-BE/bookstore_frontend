import React from "react";
import { StarIcon } from "../icons";

const Rating = ({ start }) => {
  return (
    <div>
      {start &&
        Array.from(Array(Math.floor(start)), (e, i) => {
          if (i === 0) {
            return <StarIcon key={i} />;
          }
          return <StarIcon key={i} ml="4px" />;
        })}
      {start &&
        Array.from(Array(Math.floor(5 - start)), (e, i) => {
          return <StarIcon key={i} fill="#E7E7E7" ml="4px" />;
        })}
    </div>
  );
};

export default Rating;
