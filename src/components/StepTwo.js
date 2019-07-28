import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { UPDATE_IMAGE_URL } from "../store";

class StepTwo extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      image_url: reduxState.image_url
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        image_url: reduxState.image_url
      });
    });
  }

  // handleImageUrl = addedImageUrl => {
  //   store.dispatch({
  //     type: UPDATE_IMAGE_URL,
  //     payload: addedImageUrl
  //   });
  // };

  handleImageUrl = e => {
    store.dispatch({
      type: UPDATE_IMAGE_URL,
      payload: e.target.value
    });
  };

  handleCancel = () => {
    this.props.history.push("/");
  };

  // saveChanges() {
  //   store.dispatch({
  //     type: UPDATE_IMAGE_URL,
  //     payload: this.state.image_url
  //   });
  // }

  render() {
    const reduxState = store.getState();
    console.log(reduxState);
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
              placeholder="image url"
              className="form-image-url"
              value={this.state.image_url}
              // onChange={e => this.handleImageUrl(e.target.value)}
              onChange={this.handleImageUrl}
            />

            <Link to="/wizard/step1">
              <button className="previous-step">Previous Step</button>
            </Link>
            <Link to="/wizard/step3">
              <button className="next-step">Next Step</button>
            </Link>
            <button onClick={this.handleCancel}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

export default StepTwo;
