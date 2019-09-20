import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import '../stylesheets/App.scss';
import ResultCont from '../containers/Score/ResultCont';
import HomePage from './HomePage/HomePage';
import MultiAnswersPage from './MultiAnswersPage';

const App = () => {
  useEffect(() => {
    document.title = 'Flash Card App'
  });

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/multi' component={MultiAnswersPage} />
        <Route exact path='/results' component={ResultCont} />
      </Switch>
    </Router>
  )
};

export default App;
