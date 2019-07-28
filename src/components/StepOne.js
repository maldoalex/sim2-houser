import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, {
  UPDATE_PROPERTY_NAME,
  UPDATE_ADDRESS,
  UPDATE_CITY,
  UPDATE_STATE,
  UPDATE_ZIP
} from "../store";

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

  handlePropertyName = e => {
    store.dispatch({
      type: UPDATE_PROPERTY_NAME,
      payload: e.target.value
    });
  };

  handleAddress = e => {
    store.dispatch({
      type: UPDATE_ADDRESS,
      payload: e.target.value
    });
  };

  handleCity = e => {
    store.dispatch({
      type: UPDATE_CITY,
      payload: e.target.value
    });
  };

  handleState = e => {
    store.dispatch({
      type: UPDATE_STATE,
      payload: e.target.value
    });
  };

  handleZip = e => {
    store.dispatch({
      type: UPDATE_ZIP,
      payload: e.target.value
    });
  };
  // handlePropertyName = addedPropertyName => {
  //   this.setState({ property_name: addedPropertyName });
  // };

  // handleAddress = addedAddress => {
  //   this.setState({ address: addedAddress });
  // };

  // handleCity = addedCity => {
  //   this.setState({ city: addedCity });
  // };

  // handleState = addedState => {
  //   this.setState({ state: addedState });
  // };

  // handleZip = addedZip => {
  //   this.setState({ zip: addedZip });
  // };

  saveChanges() {
    store.dispatch({
      type: UPDATE_PROPERTY_NAME,
      payload: this.state.property_name
    });
    store.dispatch({
      type: UPDATE_ADDRESS,
      payload: this.state.address
    });
    store.dispatch({
      type: UPDATE_CITY,
      payload: this.state.city
    });
    store.dispatch({
      type: UPDATE_STATE,
      payload: this.state.state
    });
    store.dispatch({
      type: UPDATE_ZIP,
      payload: this.state.zip
    });
  }

  render() {
    return (
      <div className="Wizard">
        <h3>Add New Listing</h3>
        {/* <Link to="/">
          <button className="cancel-btn" onClick={this.handleCancel}>
            Cancel
          </button>
        </Link> */}
        <div className="form">
          <form>
            <input
              placeholder="property name"
              className="form-property-name"
              value={this.state.property_name}
              onChange={this.handlePropertyName}
              // onChange={e => this.handlePropertyName(e.target.value)}
            />
            <input
              placeholder="address"
              className="form-address"
              value={this.state.address}
              onChange={this.handleAddress}
              // onChange={e => this.handleAddress(e.target.value)}
            />
            <input
              placeholder="city"
              className="form-city"
              value={this.state.city}
              onChange={this.handleCity}
              // onChange={e => this.handleCity(e.target.value)}
            />
            <input
              placeholder="state"
              className="form-state"
              value={this.state.state}
              onChange={this.handleState}
              // onChange={e => this.handleState(e.target.value)}
            />
            <input
              placeholder="zip"
              className="form-zip"
              value={this.state.zip}
              onChange={this.handleZip}
              // onChange={e => this.handleZip(e.target.value)}
            />

            <Link to="/wizard/step2">
              <button
                className="next-step"
                // onClick={() => this.saveChanges()}
              >
                Next Step
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default StepOne;
