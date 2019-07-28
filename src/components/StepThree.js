import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import store, { UPDATE_MORTGAGE, UPDATE_RENT } from "../store";

class StepThree extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      mortgage: reduxState.mortgage,
      rent: reduxState.rent
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        mortgage: reduxState.mortgage,
        rent: reduxState.rent
      });
    });
  }

  handleMortgage = e => {
    store.dispatch({
      type: UPDATE_MORTGAGE,
      payload: e.target.value
    });
  };

  handleRent = e => {
    store.dispatch({
      type: UPDATE_RENT,
      payload: e.target.value
    });
  };
  // handleMortgage = addedMortgage => {
  //   store.dispatch({
  //     type: UPDATE_MORTGAGE,
  //     payload: addedMortgage
  //   });
  // };

  // handleRent = addedRent => {
  //   store.dispatch({
  //     type: UPDATE_RENT,
  //     payload: addedRent
  //   });
  // };

  handleComplete = () => {
    const reduxState = store.getState();
    axios
      .post("/api/properties", {
        property_name: reduxState.property_name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip,
        image_url: reduxState.image_url,
        mortgage: reduxState.mortgage,
        rent: reduxState.rent
      })
      .then(response => {
        console.log(response.data);
      });
  };

  saveChanges() {
    store.dispatch({
      type: UPDATE_MORTGAGE,
      payload: this.state.mortgage
    });
    store.dispatch({
      type: UPDATE_RENT,
      payload: this.state.rent
    });
  }

  render() {
    const reduxState = store.getState();
    console.log(reduxState);
    return (
      <div className="Wizard">
        <h3>Add New Listing</h3>

        <div className="form">
          <form>
            <input
              placeholder="monthly mortgage amount"
              className="form-monthly-mortgage"
              value={this.state.mortgage}
              onChange={this.handleMortgage}
              // onChange={e => this.handleMortgage(e.target.value)}
            />
            <input
              placeholder="desired monthly rent"
              className="form-monthly-rent"
              value={this.state.rent}
              onChange={this.handleRent}
              // onChange={e => this.handleRent(e.target.value)}
            />

            <Link to="/wizard/step2">
              <button
                className="previous-step"
                // onClick={() => this.saveChanges()}
              >
                Previous Step
              </button>
            </Link>
            <Link to="/">
              <button className="complete" onClick={this.handleComplete}>
                Complete
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default StepThree;
