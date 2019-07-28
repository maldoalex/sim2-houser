import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class StepThree extends Component {
  constructor() {
    super();
    this.state = {
      mortgage: 0,
      rent: 0
    };
  }

  handleMortgage = addedMortgage => {
    this.setState({ mortgage: addedMortgage });
  };

  handleRent = addedRent => {
    this.setState({ rent: addedRent });
  };

  handleComplete = () => {
    axios.post("/api/properties", this.state).then(response => {
      console.log(response.data);
    });
  };

  render() {
    return (
      <div className="Wizard">
        <h3>Add New Listing</h3>
        <div className="form">
          <form>
            <input
              placeholder="monthly mortgage amount"
              className="form-monthly-mortgage"
              value={this.state.mortgage}
              onChange={e => this.handleMortgage(e.target.value)}
            />
            <input
              placeholder="desired monthly rent"
              className="form-monthly-rent"
              value={this.state.rent}
              onChange={e => this.handleRent(e.target.value)}
            />

            <Link to="/wizard/step2">
              <button className="previous-step">Previous Step</button>
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
