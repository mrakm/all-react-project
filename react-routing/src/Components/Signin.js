import React from 'react'
import {useHistory } from 'react-router-dom';
import {login} from '../utils';
 
export const Signin = () => {
    const history=useHistory()
    const handelSignIn=()=>{
        login();
        history.push('/dashboard')
    
      }
    return (
        <div>
            SignIN
            <button onClick={handelSignIn}   >
                Login
            </button>
        </div>
    )
}
