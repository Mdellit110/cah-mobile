import React, { Component } from "react";
import "./App.css";
import { fetchWhite, fetchBlack, getBlacks, getWhites } from "./services/axios";
import Deck from "./Components/Deck";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whites: [],
      blacks: []
    };
  }

  async componentDidMount() {
    const whites = await getWhites(50);
    const blacks = await getBlacks(5);
    this.setState({
      whites,
      blacks
    });
  }

  render() {
    return (
      <div className="App">
        <Deck color="white" deck={this.state.whites} />
        <Deck color="black" deck={this.state.blacks} />
      </div>
    );
  }
}

export default App;
