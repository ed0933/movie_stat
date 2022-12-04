import React from "react";
import { Dropdown, Option } from "./DropdownMovie";

class MovieLookup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);
  }

  render() {
    return (
      <div>
        <h1>Which movie do you want to look up?</h1>
        <Dropdown
          formLabel="Choose a movie"
          buttonText="Submit form"
          onChange={this.handleSelect}          action=""
        >
          <Option value="Click to see options" />
          <Option value="Movie 1" />
          <Option value="Movie 2" />
          <Option value="Movie 3" />
        </Dropdown>
        <p>You selected {this.state.value} </p>
      </div>
    );
  }
}

export default MovieLookup;
