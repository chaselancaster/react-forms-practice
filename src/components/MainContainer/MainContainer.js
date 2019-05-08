import React, { Component } from "react";
import DogForm from "./DogForm";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <h1>Helloooo {this.props.username}</h1>
        <DogForm doAddDog={this.props.doAddDog} />
      </div>
    );
  }
}

export default MainContainer;
