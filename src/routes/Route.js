import { Route, Redirect } from "react-router-dom";

import React from "react";

function RouteWrapper({ component: Component, isPrivate, ...rest }) {

    const loading = false
    const signed = false

    if(loading){
        return(
            <div></div>
        )
    }


    if(!signed && isPrivate){
        return <Redirect to="/"></Redirect>
    }

    if(signed && !isPrivate){
        return <Redirect to="/dashboard"></Redirect>
    }

  return (
    <Route
      {...rest}
      render={(props) => <Component {...props}></Component>}
    ></Route>
  );
}

export default RouteWrapper;
