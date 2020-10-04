import React from "react";
import {Link, useLocation} from "react-router-dom";
import "../../styles/navbar.css"
import bannerLogo from "../../images/bannerLogo.png"
import ProfileDropdown from "./ProfileDropdown";


const Nav = () =>{
    const loc = useLocation();
    
    return(
        <div className="fullNav">
            <img src={bannerLogo} />
            <div className="navContent">
                <Link className={`${loc.pathname === "/" ? "navSelection" : ""}`} to= "/">Home</Link>
                <Link className={`${loc.pathname.includes("/pricing") ? "navSelection" : ""}`} to = "/pricing">Pricing</Link>
                <Link className={`${loc.pathname.includes("/group-sessions") ? "navSelection" : ""}`} to = "/group-sessions">Group Sessions</Link>
                <Link className={"bottomNav"}className={`bottomNav ${loc.pathname.includes("/contact") ? "navSelection" : ""}`} to = "/contact">Contact</Link>
            </div>
            <ProfileDropdown />
        </div>
    )
}

export default Nav;