// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Loading } from '../loading';

// Loadable components
const Home = Loadable({
  loader: () => import('../home'),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import('../../views/login'),
  loading: Loading,
});

const Maintenance = Loadable({
  loader: () => import('../maintenance'),
  loading: Loading,
});

type Props = {
  maintenanceMode?: boolean,
};

const RedirectHandler = ({ maintenanceMode }: Props) => {
  if (maintenanceMode) {
    return <Maintenance />;
  }

  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default RedirectHandler;