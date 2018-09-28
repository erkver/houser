import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleImageUrl } from "../ducks/reducer";

class StepTwo extends Component {
  render() {
    const { handleImageUrl, image_url } = this.props;
    return (
      <div>
        <h1>Add New Listing</h1>
        <h4>Image URL</h4>
          <input 
            value={image_url}
            type="text"
            onChange={e => handleImageUrl(e.target.value)} />
        <Link to="/wizard/step1">Previouse Step</Link>
        <Link to="/wizard/step3">Next Step</Link>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {handleImageUrl})(StepTwo);
