import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import DefaultLayout from "../layouts/Default/index";

import { useProfile } from "../hooks/index";

const AuthProtected = (props: any) => {
  const { userProfile, loading } = useProfile();

  /*
    redirect is un-auth access protected routes via url
  */
  const location = useLocation();
  if (!userProfile && loading) {
    return (
      <Redirect to={{ pathname: "/auth-login", state: { from: location } }} />
    );
  }

  return <>{props.children}</>;
};

const AccessRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props: any) => {
        return (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        );
      }}
    />
  );
};

export { AuthProtected, AccessRoute };
