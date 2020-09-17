import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";


/*
* Wrapper for components which are only rendered when a user is authenticated
* */
function PrivateRoute({ component: Component, ...rest }) {
    console.log(rest)
    const { state } = useAuth();
    return (
        <Route
            {...rest}
            render={props =>
                state.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
}

export default PrivateRoute;
