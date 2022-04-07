import React, { useState } from "react";

import Card from "../card/card.component";

const UseStateExample = () => {
  const [name, setName] = useState("Demata");
  const [address, setAddress] = useState("Amsterdam");

  return (
    <Card>
      <h1> {name} </h1>
      <h1> {address} </h1>
      <button onClick={() => setName("Joey")}>Set Name to Joey</button>
      <button onClick={() => setAddress("Philippines")}>Set Address</button>
    </Card>
  );
};

export class StateClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Demata",
      address: "Philippines",
    };
  }

  render() {
    return (
      <Card>
        <h1> {this.state.name} </h1>
        <button onClick={this.setState({ address: "Andrei" })}>
          Set Name to Joey
        </button>
        <button onClick={this.setState({ address: "Amsterdam" })}>
          Set Address
        </button>
      </Card>
    );
  }
}

export default UseStateExample;
