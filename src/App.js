import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from '../src/components/Welcome.jsx';
import Login from '../src/components/Login'; // Assuming you have a Login component

const App = () => {
  return (
    <Router basename="http://localhost:3000/">
      <Switch>
        <Route exact path="/home" component={Welcome} />
        <Route path="/login" component={Login} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
