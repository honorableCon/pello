import React from "react";
import { Switch, Route } from "react-router-dom";

// layouts
import NonAuthLayout from "../layouts/NonAuth/index";
import { AuthProtected, AccessRoute } from "./AuthProtected";

import { publicRoutes, privateRoutes } from "./allRoutes";

const Index = (props: any) => {
  const availablePublicRoutesPaths = publicRoutes.map(r => r.path);
  const availableAuthRoutesPath = privateRoutes.map(r => r.path);

  return (
    <Switch>
      <Route path={availablePublicRoutesPaths}>
        <NonAuthLayout>
          <Switch>
            {publicRoutes.map((route, idx) => (
              <Route
                path={route.path}
                component={route.component}
                key={idx}
                exact={true}
              />
            ))}
          </Switch>
        </NonAuthLayout>
      </Route>

      <Route path={availableAuthRoutesPath}>
        <AuthProtected>
          <Switch>
            {privateRoutes.map((route, idx) => (
              <AccessRoute
                path={route.path}
                component={route.component}
                key={idx}
                exact={true}
              />
            ))}
          </Switch>
        </AuthProtected>
      </Route>
    </Switch>
  );
};

export default Index;
