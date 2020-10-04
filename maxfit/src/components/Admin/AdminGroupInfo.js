import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import {useParams} from "react-router-dom";
import "../../styles/groupSessions.css"

const AdminGroupInfo = () =>{
    const {id} = useParams();
    const [group, setGroup] = useState({})
    const [names, setNames] = useState([])
    console.log(id)
    useEffect(()=>{
        axiosWithAuth()
        .get(`/api/groups/${id}`)
        .then(res=>{
            setGroup(res.data)
            setNames(res.data.regNames.split(","))
        })
        .catch(err=>{
            console.log(err);
        })
    }, [])

    return(
        <div className="GroupSessionWrapper">
            <div className="GroupSessionCard">
                <h4>ID: {group.id}</h4>
                <h4>Title: {group.title}</h4>
                <h4>Date: {group.date}</h4>
                <h4>Time: {group.time}</h4>
                <h4>Employees: {group.employees}</h4>
                <h4>Registered Members:</h4>
                {names.map(nm=>{
                    return(<h5>- {nm}</h5>)
                })}
            </div>
        </div>
    )
}

export default AdminGroupInfo;