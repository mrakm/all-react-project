import React from 'react'
//import {Dashboard} from '../Components/Dashboard';
import { Redirect, Route } from 'react-router-dom';
import { islogin } from '../utils';
export const Privateroute = ({component:Component}) => {
    return (
        <Route
            render={props=>(
                islogin() ? <Component {...props} /> :<Redirect to='/signin'/>
            )}
        />
    )
}
