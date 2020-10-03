import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import GroupCards from "./GroupCards";
import "../../styles/groupSessions.css"

const GroupSessions = () =>{
    const [groups, setGroups] = useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get("/api/groups")
        .then(res=>{
            setGroups(res.data)
        })
    }, [])


    return(
        <div className="GroupPageWrapper">
            <div className="GroupPageHeader">
                <h1>Group Sessions</h1>
                <h3>Here is a list of our group sessions that are available for sign-up! Group sessions are the best way to Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut tellus elementum. Elementum curabitur vitae nunc sed. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Sed adipiscing diam donec adipiscing tristique. Ut tortor pretium viverra suspendisse potenti nullam ac. Tincidunt eget nullam non nisi est sit amet facilisis. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit.</h3>
            </div>
            {groups.map(group=>(
                <GroupCards group={group} />
            ))}
        </div>
    )
}

export default GroupSessions