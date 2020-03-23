import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../layouts/NotFound';
import Badachim from '../components/pages/Badachim';
import HowTo from '../components/pages/HowTo';
import Utils from '../components/pages/Utils';

export const Routes = () => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/badachim' component={Badachim} />
        <Route exact path='/howto' component={HowTo} />
        <Route exact path='/utils' component={Utils} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </section>
  );
};
export default Routes;
