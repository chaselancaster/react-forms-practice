import React, { Component } from "react";

class DogForm extends Component {
  state = {
    name: "",
    age: "",
    breed: ""
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.doAddDog(this.state);
    this.setState({
      name: "",
      age: "",
      breed: ""
    });
  };

  render() {
    const { name, age, breed } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          value={age}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="breed"
          placeholder="breed"
          value={breed}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default DogForm;
