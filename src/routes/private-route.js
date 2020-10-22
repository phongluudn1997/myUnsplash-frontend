import { useAuth } from "context/auth";
import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({component: Component, ...rest}){
    const {token} = useAuth()
    return <Route {...rest} render={(props) => token? <Component {...rest} {...props}/>: <Redirect to={{pathname: "/login", state: { referer: props.location } }} /> }/>
}

export default PrivateRoute