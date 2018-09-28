import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleName, handleAddress, handleCity, handleState, handleZip } from "../../ducks/reducer";


class StepOne extends Component {
  render() {
    const { handleName, handleAddress, handleCity, handleState, handleZip, name, address, city, st, zip } = this.props;
    console.log(this.props);
    return (
      <div className="step">
          <div className="step-cont">
          <h4>Property Name</h4>
            <input 
              value={name}
              type="text"
              onChange={e => handleName(e.target.value)} />
          <h4>Address</h4>
            <input 
              value={address}
              type="text"
              onChange={e => handleAddress(e.target.value)} />
          <h4>City</h4>
            <input 
              value={city}
              type="text"
              onChange={e => handleCity(e.target.value)} />
          <h4>State</h4>
            <input 
              value={st}
              type="text"
              onChange={e => handleState(e.target.value)} />
          <h4>Zip</h4>
            <input 
              value={zip}
              type="number"
              onChange={e => handleZip(e.target.value)} />
          </div>
        <Link to="/wizard/step2" className="next-btn" >Next Step</Link>
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {handleName, handleAddress, handleCity, handleState, handleZip })(StepOne);