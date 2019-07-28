import React, { Component } from "react";

class House extends Component {
  render() {
    return (
      <div className="House">
        <div>
          <h5>{this.props.house.property_name}</h5>
          <h5>{this.props.house.address}</h5>
          <h5>{this.props.house.city}</h5>
          <h5>{this.props.house.state}</h5>
          <h5>{this.props.house.zip}</h5>
          <h5>{this.props.house.image_url}</h5>
          <h5>{this.props.house.mortgage}</h5>
          <h5>{this.props.house.rent}</h5>
        </div>
        <button
          className="delete-btn"
          onClick={() => {
            this.props.deleteHouseListing(this.props.house.id);
          }}
        >
          X
        </button>
      </div>
    );
  }
}

export default House;
