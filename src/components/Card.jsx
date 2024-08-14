import React from "react";

const Card = ({name,like}) => {
  return <div>
    <h2>{name}</h2>
    <h3>{like}</h3>
  </div>;
};


export default Card;