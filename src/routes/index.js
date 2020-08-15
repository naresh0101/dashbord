import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../components/pages/login/Login"
import Assessments from '../components/pages/assessments/Assessments';

function Routes() {
  return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Assessments} />
          <Route exact path="/assessments" component={Assessments} />
        </Switch>
      </Router>
  );
}

export default Routes; 