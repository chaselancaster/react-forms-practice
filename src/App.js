import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import MainContainer from "./components/MainContainer/MainContainer";
import ShowDogs from "./components/ShowDogs/ShowDogs";

class App extends Component {
  state = {
    logged: false,
    username: "",
    dogs: []
  };

  doAddDog = dog =>
    this.setState({
      dogs: [...this.state.dogs, dog]
    });

  login = username =>
    this.setState({
      logged: true,
      username: username
    });

  render() {
    const { logged, username, dogs } = this.state;
    return (
      // If logged is true, show the MainContainer component,
      // else show the Login component
      <div className="App">
        {logged ? (
          <div>
            <MainContainer username={username} doAddDog={this.doAddDog} />
            <ShowDogs dogs={this.state.dogs} />
          </div>
        ) : (
          <Login login={this.login} />
        )}
      </div>
    );
  }
}

export default App;
