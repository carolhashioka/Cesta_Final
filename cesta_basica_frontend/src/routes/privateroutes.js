import React from "react";
import { Redirect, Route } from "react-router-dom";
export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    //Verificar se existe token
    render={props =>
      localStorage.getItem("@CESTA/token") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            //Se não existir, voltar à tela de Login
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
