import React, {useState} from "react";
import axios from "axios"
import {useHistory, useLocation} from "react-router-dom"
import {Link} from "react-router-dom";
import "../../styles/loginout.css"

const LoginForm = () =>{
    const {push} = useHistory();
    const {reload} = useHistory();
    const location = useLocation();
    const [creds, setCreds] = useState({
        email: "",
        fName: "",
        lName: "",
        password: "",
        role: 1,
    })

    const handleChange = e =>{
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const handleLogSub = e=>{
        axios.post("https://max-fitness.herokuapp.com/api/login", creds)
        .then(res=>{
            localStorage.setItem("token", JSON.stringify(res.data.token))
            localStorage.setItem("id", JSON.stringify(res.data.user.id))
            localStorage.setItem("email", JSON.stringify(res.data.user.email))
            localStorage.setItem("fName", JSON.stringify(res.data.user.fName))
            localStorage.setItem("lName", JSON.stringify(res.data.user.lName))
            localStorage.setItem("role", JSON.stringify(res.data.user.role))
            localStorage.setItem("hasToken", JSON.stringify("hasToken"))
            console.log(location)
            push(`/`)
            window.location.reload(false);
        })
        .catch(err=>{
            alert("Email or Password is Incorrect!")
        })
        
    }

    return(
        <div className="LogWrapper">
            <div className="LogContent">
                <div className="LogTitle">
                    <h1>Sign In</h1>
                    <p>If you don't have an account, you can <Link to="/register">Sign up here</Link>!</p>
                </div>
                <form>
                    <div className="formInput">
                        <p>Email:</p>
                        <input
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Email"
                        value={creds.email}
                        onChange={handleChange}
                        />
                    </div>
                    <br/>
                    <div className="formInput">
                        <p>Password:</p>
                        <input
                        type="password"
                        label="Password"
                        name="password"
                        placeholder="Password"
                        value={creds.password}
                        onChange={handleChange}
                        />
                    </div>
                </form>
                <button onClick={()=>{handleLogSub()}}>Log In</button>
            </div>
        </div>
    )
}

export default LoginForm;