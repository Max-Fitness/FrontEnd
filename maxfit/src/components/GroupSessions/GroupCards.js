import React from "react";
import {Link} from "react-router-dom";
import "../../styles/groupSessions.css"

const GroupCards = ({group}) =>{
    return(
            <div className="GroupSessionCard">
                <Link onClick={()=>{window.scrollTo(0,0)}} to={`/group-sessions/${group.id}`}>
                <div className = "GroupSessionCardText">
                    <h2>{group.title}</h2>
                    <h3>{group.time}</h3>
                </div>
                <div className = "GroupSessionCardText">
                    <h3>{group.employees}</h3>
                    <h3>{group.date}</h3>
                </div>
                </Link>
            </div>
    )
}

export default GroupCards;