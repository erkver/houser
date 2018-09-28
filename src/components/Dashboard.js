import React,{ Component } from "react";
import House from "./House";
import { Link } from "react-router-dom";
import axios from "axios";


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
      console.log(res.data);
      this.setState({houses: res.data});
    }).catch(err => console.log(err));
  }

  render() {
    const { houses } = this.state;
    let houseList = houses.map((e, i) => (
      <div key={i}>
        <House 
          house={e}
          deleteHouse={this.deleteHouse}
        />
      </div>
    ));
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to="/wizard/step1" >Add New Property</Link>
        <h3>Home Listings</h3>
        {houseList}
      </div>
    )
  }
}

export default Dashboard;