import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "down"
    };
  }
  flipCard(card) {
    const { color } = this.state;
    const { active } = this.state;
    color === "black"
      ? active === "down"
        ? this.setState({
            active: "up"
          })
        :
          this.setState({
            active: "down"
          })
      : active === "down"
        ? this.setState({
            active: "in-hand"
          })
        : active === "in-hand"
          ? this.setState({
              active: "up"
            })
          :
            this.setState({
              active: "down"
            })
    }

  render() {
    const { color, card } = this.props;
    const { active } = this.state;
    return (
      <div
        onClick={() => this.flipCard(card)}
        className={`card ${color} ${active} flipper`}
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
