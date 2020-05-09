import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = (props) => {
  const { routes, defaultRoute } = props;
  return (
    <Switch>
      {routes.map((route, index) => {
        const { component: RouteComponent, dropDownItems, path } = route;
        return <Route
          exact={true}
          key={index}
          path={path}
          render={() => <RouteComponent {...props} routes={dropDownItems} />} />;
      })}
      <Redirect to={defaultRoute} />
    </Switch>
  );
}
