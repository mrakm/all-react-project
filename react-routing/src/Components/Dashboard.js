import React from 'react'
import {logout} from '../utils';
import {useHistory } from 'react-router-dom';




export const Dashboard = () => {
    const history=useHistory();
    const handelLogout=()=>{
    logout();
    history.push('/signin')
}

    return (
        <div>
            Dashboard
            <button
            onClick={handelLogout}
            >
                logout
            </button>
        </div>
    )
}
