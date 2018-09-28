import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import StepOne from "../StepOne/StepOne";
import StepTwo from "../StepTwo/StepTwo";
import StepThree from "../StepThree/StepThree";
import { connect } from "react-redux";
import { clearInputs } from "../../ducks/reducer";
import "./Wizard.css";


class Wizard extends Component {
  render() {
    return (
      <div className="cancel-btn-cont">
        <div className="add-list-head">
          <h1 className="new-list-text">Add New Listing</h1>
          <Link 
            className="cancel-btn"
            to="/" 
            onClick={() => this.props.clearInputs()}>Cancel</Link>
        </div>
        <div>
          <Switch>
            <Route path="/wizard/step1" component={StepOne} />
            <Route path="/wizard/step2" component={StepTwo} />
            <Route path="/wizard/step3" component={StepThree} />
          </Switch>
        </div>
      </div>
    )
  }
}



export default connect(null, {clearInputs})(Wizard);