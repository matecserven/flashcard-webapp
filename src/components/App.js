import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import '../stylesheets/App.scss';
import HomePage from './HomePage/HomePage';
import MultiAnswersPageCont from '../containers/MultiAnswersPageCont';

const App = () => {
  useEffect(() => {
    document.title = 'Flash Card App'
  });

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/multi' component={MultiAnswersPageCont} />
      </Switch>
    </Router>
  )
};

export default App;
