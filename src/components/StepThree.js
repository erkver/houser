import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearInputs } from "../ducks/reducer";
import axios from "axios";

class StepThree extends Component {
  constructor() {
    super();
    this.state = {
      mortgage_amt: 0,
      monthly_rent: 0
    }
    this.addHouse = this.addHouse.bind(this);
  }

  addHouse(name, address, city, st, zip, image_url, mortgage_amt, monthly_rent) {
    axios.post('/api/home', {name, address, city, st, zip, image_url, mortgage_amt, monthly_rent}).then(res => {
      this.props.clearInputs();
    }).catch(err => console.log(err))
  }

  render() {
    // console.log(this.props);
    const { mortgage_amt, monthly_rent } = this.state;
    const { name, address, city, st, zip, image_url } = this.props;
    return (
      <div>
        <h1>Add New Listing</h1>
        <p>Recommended Rent $0</p>
        <h4>Monthly Mortgage Amount</h4>
          <input 
            value={mortgage_amt}
            type="number"
            onChange={e => this.setState({mortgage_amt: e.target.value})} />
        <h4>Desired Monthly Rent</h4>
          <input 
          value={monthly_rent}
          type="number"
          onChange={e => this.setState({monthly_rent: e.target.value })} />
        <Link to="/wizard/step2">Previouse Step</Link>
        <Link to="/" 
          onClick={() => this.addHouse(name, address, city, st, zip, image_url, mortgage_amt, monthly_rent)}>Submit Property
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {clearInputs})(StepThree);
