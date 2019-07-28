import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from "../store";

class StepTwo extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      image_url: reduxState.image_url
    };
  }

  handleImageUrl = addedImageUrl => {
    this.setState({ image_url: addedImageUrl });
  };

  render() {
    return (
      <div className="Wizard">
        <h3>Add New Listing</h3>
        <div className="form">
          <form>
            <input
              placeholder="image url"
              className="form-image-url"
              value={this.state.image_url}
              onChange={e => this.handleImageUrl(e.target.value)}
            />

            <Link to="/wizard/step1">
              <button className="previous-step">Previous Step</button>
            </Link>
            <Link to="/wizard/step3">
              <button className="next-step">Next Step</button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default StepTwo;
