import React from "react";
import Card from "./Card";

const Deck = props => {
  const { color, deck, flip } = props;
  return (
    <div className={`${color} deck`}>
      {deck.map(card => (
        <Card flip={flip} card={card} color={color} />
      ))}
    </div>
  );
};

export default Deck;
