import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './HomePage/HomePage';
import '../styles/App.css';
import MultiAnswersPage from './MultiAnswersPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/multi" component={MultiAnswersPage} />
    </Switch>
  </Router>
);

export default App;
