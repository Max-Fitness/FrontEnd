import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import "../../styles/groupSessions.css"
import {Link} from "react-router-dom";

const AdminGroups = () =>{
    const [groups, setGroups] = useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get("/api/groups")
        .then(res=>{
            let temp = res.data.sort(function(a, b){return (parseInt(a.id) - parseInt(b.id))})
            setGroups(temp)
        })
    }, [])

    const quickDelete = (id) =>{
        if(parseInt(localStorage.getItem("role"),10) >= 4){
            axiosWithAuth()
            .delete(`/api/groups/${id}`)
            .then(res=>{
                setGroups(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        else{
            alert("Only site administrators have the ability to quick-delete! Employees may only delete groups via the edit tab!")
        }
    }


    return(
        <div className="GroupPageWrapper">
            <Link to="/admin">Back to Site Management</Link>
            <div className="GroupPageHeader">
                <h1>Group Sessions</h1>
                <h3>Here is the current state of the group sessions (the data is being pulled directly from the api here). The sessions do not expire with time, so they have to be manually-deleted. Administrators (role 4 users) have the ability to use the delete button right on this page. For the sake of security and minimizing the margin of error, employees (role 3 users) may only delete sessions via the edit tab!</h3>
            </div>
            {groups.map(group=>(
                <div className="AdminGroupSessionCard">
                    <div className="AdminGroupSessionCardText">
                        <h2>Title: {group.title}</h2>
                        <h2>Time: {group.time}</h2>
                        <h2>Date: {group.date}</h2>
                    </div>
                    <div className="adminButtonPanel">
                        <Link to={`/admin/groups/info/${group.id}`}><button>View Info</button></Link>
                        <Link to={`/admin/groups/edit/${group.id}`}><button>Edit</button></Link>
                        <button onClick={()=>{quickDelete(group.id)}}>Quick-Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AdminGroups
