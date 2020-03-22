import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../layouts/NotFound';
import Alert from '../layouts/Alert';
import Badachim from '../components/pages/Badachim';
import HowTo from '../components/pages/HowTo';
import Utils from '../components/pages/Utils';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

export const Routes = () => {
  return (
    <section className='container'>
      <Provider template={AlertTemplate} {...options}>
        <Switch>
          <Route exact path='/badachim' component={Badachim} />
          <Route exact path='/howto' component={HowTo} />
          <Route exact path='/utils' component={Utils} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Provider>
    </section>
  );
};
export default Routes;
