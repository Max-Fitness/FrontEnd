import React from "react"
import logoutImg from "../../images/logoutImg.png"
import loginImg from "../../images/loginImg.png"

const ProfileDropdown = () => {
    return(
        <img id="profileImg" src={(localStorage.getItem("token")) ? loginImg : logoutImg} />
    )
}

export default ProfileDropdown