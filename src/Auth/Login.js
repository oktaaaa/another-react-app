import  Axios  from "axios";
import React from "react";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () =>{

    const navigate = useNavigate()
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e, name) => {
        const value = e.target.value
        setLogin({...login, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            Axios.post("https://apimi5a.vercel.app/auth/login", login)
            .then((res) => {
                let {token} = res.data
                let {nama} = res.data
                let {role} = res.data
                Cookies.set('token', token)
                Cookies.set('nama', nama)
                Cookies.set('role', role)
                if (role == "test"){
                    window.location.href = '/fakultas'
                }
                window.location.href = '/fakultas'
            })
        } catch (error) {
            alert(error)
        }
    }

    return(
        <>
            <h2>Login</h2>

            <form>
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" value={login.email} onChange={(e) => handleChange(e, "email")}
                    className="form-control" placeholder="Input email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={login.password} onChange={(e) => handleChange(e, "password")}
                    className="form-control" placeholder="Input password"/>
                </div>
                <button onClick={handleSubmit} className="btn btn-primary">Login</button>
                
            </form>
        </>
    )
}

export default Login