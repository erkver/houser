import React,{ Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    }
    this.deleteHouse = this.deleteHouse.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/homes')
      .then(res => {
        console.log(res.data);
        this.setState({ houses: res.data });
      })
      .catch(err => console.log(err));
  }

  deleteHouse(id) {
    axios.delete(`/api/home/${id}`).then(res => {
      // console.log(res.data);
      this.setState({houses: res.data});
    }).catch(err => console.log(err));
  }

  render() {
    const { houses } = this.state;
    let houseList = houses.map((e, i) => (
      <div className="house-cont" key={i}>
        <House 
          house={e}
          deleteHouse={this.deleteHouse}
        />
      </div>
    ));
    return (
      <div className="dash-cont">
        <div className="top-cont" >
          <h1 className="dash-txt">Dashboard</h1>
          <Link to="/wizard/step1" className="new-prop-btn">Add New Property</Link>
        </div>
        <h3 className="listings-txt">Home Listings</h3>
        {houseList}
      </div>
    )
  }
}

export default Dashboard;