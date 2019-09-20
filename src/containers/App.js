import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.css';
import Homepage from './HomePage/HomePage';
import MultiAnswersPage from './MultiAnswersPage';
import ResultPage from './ResultPage/ResultPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/multi' component={MultiAnswersPage} />
      <Route exact path='/results' component={ResultPage} />
    </Switch>
  </Router>
);

export default App;
