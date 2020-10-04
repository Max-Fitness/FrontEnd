import React, {useState} from "react"
import logoutImg from "../../images/logoutImg.png"
import loginImg from "../../images/loginImg.png"
import {Link} from "react-router-dom";

const ProfileDropdown = props => {
    const [open, setOpen] = useState(false)



    return(
        <>
            <Link to={localStorage.getItem("token") ? "/profile" : "/login"}><img onClick={()=>{setOpen(!open)}} id="profileImg" src={(localStorage.getItem("token")) ? loginImg : logoutImg} /></Link>
        </>
    )
}

export default ProfileDropdown