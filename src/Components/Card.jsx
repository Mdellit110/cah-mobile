import React from "react";

const Card = props => {
  const { color } = props;
  return <div className={`${color}`} />;
};

export default Card;
