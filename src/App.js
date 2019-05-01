import React, { Component } from "react";
import "./App.css";
import { fetchWhite, fetchBlack, getBlacks, getWhites } from "./services/axios";

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
    return <div className="App" />;
  }
}

export default App;
