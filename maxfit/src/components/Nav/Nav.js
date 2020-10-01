import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../../styles/Nav.css"
import bannerLogo from "../../images/bannerLogo.png"
import ProfileDropdown from "./ProfileDropdown";

const Nav = () =>{
    const [homeOn, setHomeOn] = useState(true);
    const [pricingOn, setPricingOn] = useState(false);
    const [groupsOn, setGroupsOn] = useState(false);
    const [contactOn, setContactOn] = useState(false);

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
                <Link onClick={setHome} className={`${homeOn ? "navSelection" : ""}`} to= "/">Home</Link>
                <Link onClick={setPricing} className={`${pricingOn ? "navSelection" : ""}`} to = "/pricing">Pricing</Link>
                <Link onClick={setGroups} className={`${groupsOn ? "navSelection" : ""}`} to = "/group-sessions">Group Sessions</Link>
                <Link onClick={setContact} className={`${contactOn ? "navSelection" : ""}`} to = "/contact">Contact</Link>
            </div>
            <ProfileDropdown />
        </div>
    )
}

export default Nav;