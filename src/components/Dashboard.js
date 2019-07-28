import React, { Component } from "react";
import House from "./House";
import { Link } from "react-router-dom";
import axios from "axios";
import store, { UPDATE_HOUSES } from "../store";

class Dashboard extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      houses: reduxState.houses
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

  getHouses = () => {
    axios.get("/api/properties").then(res => {
      store.dispatch({
        type: UPDATE_HOUSES,
        payload: res.data
      });
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
    this.getHouses();
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
