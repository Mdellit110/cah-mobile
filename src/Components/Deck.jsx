import React from "react";
import Card from "./Card";

const Deck = props => {
  const { color } = props;
  return (
    <div className={`${color} deck`}>
      <Card color={color} />
    </div>
  );
};

export default Deck;
