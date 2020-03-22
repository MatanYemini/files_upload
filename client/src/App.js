import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './layouts/Landing';
import Routes from './routing/Routes';
import NavBar from './layouts/NavBar';

const App = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Route exact path='/' component={Landing} />
        <Route component={Routes} />
      </Fragment>
    </Router>
  );
};

export default App;
