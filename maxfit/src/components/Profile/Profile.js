import React from "react";

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
            <h1>My Profile</h1>
            <h3>Name: {user.fName} {user.lName} </h3>
            <h3>Email Address: {user.email}</h3>
            <button onClick={()=>{logOut()}}>Log Out</button>
        </div>
    )
}

export default Profile;