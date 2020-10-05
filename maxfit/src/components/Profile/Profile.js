import React from "react";
import {Link} from "react-router-dom";
import "../../styles/profile.css";

const Profile = () =>{
    const logOut = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("fName");
        localStorage.removeItem("lName");
        localStorage.removeItem("role");
        localStorage.removeItem("id");
        localStorage.removeItem("email");
        window.location.reload(false);
    }

    const user={
        fName: localStorage.getItem("fName").replace(/"/g,""),
        lName: localStorage.getItem("lName").replace(/"/g,""),
        email: localStorage.getItem("email").replace(/"/g,"")
    }

    return(
        <div className="ProfileWrapper">
            <div className="ProfileCard">
                <h1>My Profile</h1>
                <h3>Name: {user.fName} {user.lName} </h3>
                <h3>Email Address: {user.email}</h3>
                {parseInt(localStorage.getItem("role"),10) >= 3 ? <Link to="/admin"><button>Site Management</button></Link> : null}
                <button onClick={()=>{logOut()}}>Log Out</button>
            </div>
        </div>
    )
}

export default Profile;