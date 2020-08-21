import React from "react";
import { Route, Redirect, RouteProps, RouteComponentProps } from "react-router-dom";
import Layout from "../layouts/layout";

const ProtectedRoute = ({ component: Comp, ...rest }: RouteProps) => {
    if(!Comp) Comp = () => <></>;
    return <Route {...rest}
          render={
              (props: RouteComponentProps<any>) => {
                  if (localStorage.getItem("logged")) {
                      return <Redirect to='/auth/login'/>;
                  }
                  // @ts-ignore
                  return <Layout><Comp {...props}/></Layout>;
              }
          }
    />
}

export default ProtectedRoute;