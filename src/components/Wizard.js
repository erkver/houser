import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { connect } from "react-redux";
import { clearInputs } from "../ducks/reducer";


class Wizard extends Component {
  render() {
    return (
      <div>
        <div>Wizard</div>
        <Link to="/" onClick={() => this.props.clearInputs()}>Cancel</Link>
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