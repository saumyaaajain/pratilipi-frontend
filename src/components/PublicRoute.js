import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

/*
* Wrapper for components which are only rendered when a user is NOT authenticated
* */
function NoAuthOnlyRoute({ component: Component, ...rest }) {
    const {state} = useAuth();
    return (
        <Route
            {...rest}
            render={props =>
                !state.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
}

export default NoAuthOnlyRoute;
