import React, {useState} from "react";
import axios from "axios"
import {useHistory, Link, useLocation} from "react-router-dom"

const LoginForm = () =>{
    const {push} = useHistory();
    const {reload} = useHistory();
    const location = useLocation();
    const [creds, setCreds] = useState({
        email: "",
        fName: "",
        lName: "",
        password: "",
        role: 2,
    })
    const [button, setButton] = useState(<button disabled={true} onClick={()=>{handleRegSub()}}>Register</button>)

    const handleChange = e =>{
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
        checkButton();
    }

    const checkButton = ()=>{
        if(creds.email && creds.fName && creds.lName && creds.password){
            setButton(<button onClick={()=>{handleRegSub()}}>Register</button>)
        }
        else{
            setButton(<button disabled={true} onClick={()=>{handleRegSub()}}>Register</button>)
        }
    }
    


    const handleRegSub = e =>{
        axios.post("https://max-fitness.herokuapp.com/api/register", creds)
        .then(res=>{
            console.log(res)
            alert("Registration was successful!")
            push('/login')
        })
        .catch(err=>{
            alert("Registration was unsuccessful!\nRegistration requires an email, first name, last name, and passsword\nIf you are still getting this error, there might already be an account with the provided email!")
            console.log(err)
        })
    }

    return(
        <div className="LogWrapper">
            <div className="LogContent">
                <div className="LogTitle">
                    <h1>Sign Up</h1>
                    <p>If you already have an account, you can <Link to="/login">Log in Here</Link>!</p>
                </div>
                <form>
                    <div className="formInput">
                        <p>Email: *</p>
                        <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={creds.email}
                        onChange={handleChange}
                        />
                    </div>
                    <br/>
                    <div className="formInput">
                        <p>First Name: *</p>
                        <input
                        type="text"
                        name="fName"
                        placeholder="First Name"
                        value={creds.fName}
                        onChange={handleChange}
                        />
                    </div>
                    <br/>
                    <div className="formInput">
                        <p>Last Name: *</p>
                        <input
                        type="text"
                        name="lName"
                        placeholder="Last Name"
                        value={creds.lName}
                        onChange={handleChange}
                        />
                    </div>
                    <br/>
                    <div className="formInput">
                        <p>Password: *</p>
                        <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={creds.password}
                        onChange={handleChange}
                        />
                    </div>
                </form>
                {button}
            </div>
        </div>
    )
}

export default LoginForm;