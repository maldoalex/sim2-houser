import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from "../store";

class StepOne extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      property_name: reduxState.property_name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        property_name: reduxState.property_name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip
      });
    });
  }

  handlePropertyName = addedPropertyName => {
    this.setState({ property_name: addedPropertyName });
  };

  handleAddress = addedAddress => {
    this.setState({ address: addedAddress });
  };

  handleCity = addedCity => {
    this.setState({ city: addedCity });
  };

  handleState = addedState => {
    this.setState({ state: addedState });
  };

  handleZip = addedZip => {
    this.setState({ zip: addedZip });
  };

  render() {
    return (
      <div className="Wizard">
        <h3>Add New Listing</h3>
        <div className="form">
          <form>
            <input
              placeholder="property name"
              className="form-property-name"
              value={this.state.property_name}
              onChange={e => this.handlePropertyName(e.target.value)}
            />
            <input
              placeholder="address"
              className="form-address"
              value={this.state.address}
              onChange={e => this.handleAddress(e.target.value)}
            />
            <input
              placeholder="city"
              className="form-city"
              value={this.state.city}
              onChange={e => this.handleCity(e.target.value)}
            />
            <input
              placeholder="state"
              className="form-state"
              value={this.state.state}
              onChange={e => this.handleState(e.target.value)}
            />
            <input
              placeholder="zip"
              className="form-zip"
              value={this.state.zip}
              onChange={e => this.handleZip(e.target.value)}
            />

            <Link to="/wizard/step2">
              <button className="next-step">Next Step</button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default StepOne;
