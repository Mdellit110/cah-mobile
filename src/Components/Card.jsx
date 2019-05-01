import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "down"
    };
  }
  flipCard(card) {
    const { active } = this.state;
    active === "down"
      ? this.setState({
          active: "up"
        })
      : this.setState({
          active: "down"
        });
  }

  render() {
    const { color, card } = this.props;
    const { active } = this.state;
    return (
      <div
        onClick={() => this.flipCard(card)}
        className={`card ${color} ${active}`}
      >
        <div className="back">
          <p>Cards Against Humanity</p>
        </div>
        <div className="front">
          <p>{card}</p>
        </div>
      </div>
    );
  }
}

export default Card;
