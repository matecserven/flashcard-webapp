import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import SingleTileSetCont from '../containers/SingleTileSetCont';
import MultiTileSetCont from '../containers/MultiTileSetCont';
import '../stylesheets/App.scss';

const App = () => {
  useEffect(() => {
    document.title = 'Flash Card App'
  });

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/multi' component={MultiTileSetCont} />
        <Route exact path='/regular' component={SingleTileSetCont} />
      </Switch>
    </Router>
  )
};

export default App;
