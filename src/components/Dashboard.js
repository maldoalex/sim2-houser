import React, { Component } from "react";
import House from "./House";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  updateHouseListings = updatedHouseList => {
    this.setState({ houses: updatedHouseList });
  };

  deleteHouseListing = id => {
    axios.delete(`/api/property/${id}`).then(res => {
      this.updateHouseListings(res.data);
      // this.history.push("/");
    });
  };

  componentDidMount() {
    axios
      .get("/api/properties")
      .then(results => {
        this.setState({ houses: results.data });
      })
      .catch(error => {
        console.log("error");
        this.setState({ error: "error" });
      });
  }

  render() {
    let listHouse = this.state.houses.map(house => {
      return (
        <House
          key={house.id}
          house={house}
          houses={this.houses}
          updateHouseListings={this.updateHouseListings}
          deleteHouseListing={this.deleteHouseListing}
        />
      );
    });
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
        <Link to="/wizard/step1" className="links">
          <button>Add New Property</button>
        </Link>
        <h3>Home Listings</h3>
        {listHouse}
      </div>
    );
  }
}

export default Dashboard;
