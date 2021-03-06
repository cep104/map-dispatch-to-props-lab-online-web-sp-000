//-----THIS PAGE FIRST FOLLOW TESTS ---------
//in this file add the this.props.addRestaurant action in handle submit.
//pass the state to the addRestaurant action in handleSubmit.
//add the connect at the end as well with null passed in for state since we are not using state.

import React, { Component } from "react";
import { addRestaurant } from "../actions/restaurants";
import { connect } from "react-redux";

export class RestaurantInput extends Component {
  state = {
    name: "",
    location: "",
  };

  handleOnNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnLocationChange = (event) => {
    this.setState({
      location: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    // add missing code
    //have to pass addRestaurant action the state.
    this.props.addRestaurant(this.state);
  };

  render() {
    return (
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location"
          />
        </p>
        <input type="submit" />
      </form>
    );
  }
}

//connect this component by wrapping RestaurantInput below
export default connect(null, { addRestaurant })(RestaurantInput);
