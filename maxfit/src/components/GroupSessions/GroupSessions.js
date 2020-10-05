import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import GroupCards from "./GroupCards";
import "../../styles/groupSessions.css"
import axios from "axios"

const GroupSessions = () =>{
    const [groups, setGroups] = useState([])
    const [content, setContent] = useState({})

    useEffect(()=>{
        axiosWithAuth()
        .get("/api/groups")
        .then(res=>{
            let temp = res.data.sort(function(a, b){return (parseInt(a.id) - parseInt(b.id))})
            setGroups(temp)
        })
        axios.get("https://max-fitness.herokuapp.com/info")
        .then(res=>{
            setContent(res.data[0])
        })
    }, [])


    return(
        <div className="GroupPageWrapper">
            <div className="GroupPageHeader">
                <h1>{content.groupTitle}</h1>
                <h3>{content.groupText}</h3>
            </div>
            {groups.map(group=>(
                <GroupCards group={group} />
            ))}
        </div>
    )
}

export default GroupSessions