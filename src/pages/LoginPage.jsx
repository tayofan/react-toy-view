import axios from "axios";
import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "../components/user/Login";
import useInputs from "../hooks/useInputs";

function LoginPage() {
    const [{id, password} , onChange, reset] = useInputs({
        inputs: {
            id: '',
            password: ''
        }
    })
    const [state, setState] = useState(false);
    const checkLogin = async () => {
        try {
            const res = await axios.post(
                `http://localhost:8080/api/login2/check`,
                {
                    id,
                    pswd: password
                }
            )
            if(res.status === 200) {
                console.log(res.data);
                localStorage.setItem('login-token', res.data.accessToken);
                localStorage.setItem('refresh-token', res.data.refreshToken);
                localStorage.setItem('id', id);
                setState(true);
            }
        } catch (error) {
            console.log(error);
        }    
    }

    if(state) {
        console.log('test1')
        return <Navigate to="/"/>;
    } else {
        console.log('test2')
        return (
            <div>
                <Login id={id} password={password} onChange={onChange}/>
                <button onClick={checkLogin}>로그인</button>
            </div>
        );
    }
    
    
}

export default LoginPage;