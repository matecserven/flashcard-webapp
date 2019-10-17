import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import SingleTileSetCont from '../containers/SingleTileSetCont';
import MultiTileSetCont from '../containers/MultiTileSetCont';
import CardCreatorLayout from '../components/CardCreatorPage/CardCreatorLayout';
import '../stylesheets/App.scss';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/multi' component={MultiTileSetCont} />
      <Route exact path='/regular' component={SingleTileSetCont} />
      <Route exact path='/newCard' component={CardCreatorLayout} />
    </Switch>
  </Router>
);

export default App;
