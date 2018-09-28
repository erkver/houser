import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleImageUrl } from "../../ducks/reducer";

class StepTwo extends Component {
  render() {
    const { handleImageUrl, image_url } = this.props;
    console.log(this.props);
    return (
      <div className="step-cont">
        <h4>Image URL</h4>
          <input 
            value={image_url}
            type="text"
            onChange={e => handleImageUrl(e.target.value)} />
          <Link to="/wizard/step1" className="prev-btn">Previous Step</Link>
          <Link to="/wizard/step3" className="next-btn">Next Step</Link>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {handleImageUrl})(StepTwo);
