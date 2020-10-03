import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import "../../styles/nav.css"
import bannerLogo from "../../images/bannerLogo.png"
import ProfileDropdown from "./ProfileDropdown";

const Nav = () =>{
    const [homeOn, setHomeOn] = useState(true);
    const [pricingOn, setPricingOn] = useState(false);
    const [groupsOn, setGroupsOn] = useState(false);
    const [contactOn, setContactOn] = useState(false);
    const loc = useLocation();
    {console.log(loc)}

    const setAllFalse = () =>{
        setHomeOn(false);
        setPricingOn(false);
        setGroupsOn(false);
        setContactOn(false);
    }
    const setHome = () =>{
        setAllFalse();
        setHomeOn(true)
    }
    const setPricing = () =>{
        setAllFalse();
        setPricingOn(true);
    }
    const setGroups = () =>{
        setAllFalse();
        setGroupsOn(true);
    }
    const setContact = () =>{
        setAllFalse();
        setContactOn(true);
    }
    
    return(
        <div className="fullNav">
            <img src={bannerLogo} />
            <div className="navContent">
                <Link className={`${loc.pathname === "/" ? "navSelection" : ""}`} to= "/">Home</Link>
                <Link className={`${loc.pathname.includes("/pricing") ? "navSelection" : ""}`} to = "/pricing">Pricing</Link>
                <Link className={`${loc.pathname.includes("/group-sessions") ? "navSelection" : ""}`} to = "/group-sessions">Group Sessions</Link>
                <Link className={`${loc.pathname.includes("/contact") ? "navSelection" : ""}`} to = "/contact">Contact</Link>
            </div>
            <ProfileDropdown />
        </div>
    )
}

export default Nav;