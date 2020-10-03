import React, {useState} from "react";
import axios from "axios"
import {useHistory, useLocation} from "react-router-dom"

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
            localStorage.setItem("hasToken", JSON.stringify("hasToken"))
            console.log(location)
            push(`/`)
            window.location.reload(false);
        })
        .catch(err=>{
            alert("invalid credentials")
        })
        
    }

    const handleRegSub = e =>{
        axios.post("https://max-fitness.herokuapp.com/api/register", creds)
        .then(res=>{
            console.log(res)
            alert("successfully registered! (this alert popup will not exist very soon)")
        })
        .catch(err=>{
            console.log("shit broke")
        })
    }

    return(
        <div>
            <form>
                <input
                type="email"
                name="email"
                placeholder="Email"
                value={creds.email}
                onChange={handleChange}
                />
                <input
                type="text"
                name="fName"
                placeholder="First Name"
                value={creds.fName}
                onChange={handleChange}
                />
                <input
                type="text"
                name="lName"
                placeholder="Last Name"
                value={creds.lName}
                onChange={handleChange}
                />
                <input
                type="password"
                name="password"
                placeholder="Password"
                value={creds.password}
                onChange={handleChange}
                />
            </form>
            <button onClick={()=>{handleLogSub()}}>Log In</button>
            <button onClick={()=>{handleRegSub()}}>Register</button>
        </div>
    )
}

export default LoginForm;