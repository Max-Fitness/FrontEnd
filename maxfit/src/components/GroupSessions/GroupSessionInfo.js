import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import "../../styles/groupSessions.css"

const GroupSessionInfo = () =>{
    const parameters = useParams();
    const [group, setGroup] = useState({})
    const [slots, setSlots] = useState(24)
    const [inGroup, setInGroup] = useState(false)
    const [groupFull, setGroupFull] = useState(false)

    useEffect(()=>{
        axiosWithAuth()
        .get(`/api/groups/${parameters.id}`)
        .then(res=>{
            setGroup(res.data)
            let regIds = res.data.regIds;
            regIds = regIds.split(",")
            setSlots(24 - (regIds.length-1))
            if(slots === 0){
                setGroupFull(true)
            }
            for(let i = 0; i < regIds.length; i++){
                if(parseInt(localStorage.getItem("id"), 10) === parseInt(regIds[i])){
                    setInGroup(true)
                }
            }
        })
    },[])

    const handleSubmit = e =>{
        const user = {
            id: parseInt(localStorage.getItem("id"), 10),
            fName: localStorage.getItem("fName").replace(/"/g,""),
            lName: localStorage.getItem("lName").replace(/"/g,""),
            email: localStorage.getItem("email").replace(/"/g,"")
        }
        axiosWithAuth()
        .put(`/api/groups/join/${parameters.id}`, user)
        .then(res=>{
            if(!inGroup){
                alert("Successfully Signed up!")
            }
            else{
                alert("Successfully Cancelled Sign up!")
            }
            window.location.reload(false)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const checkButtonOff = () =>{
        if(inGroup === false && slots === 0){
            return true;
        }
        return false;
    }

    return(
        <div className="GroupSessionWrapper">
            <div className="GroupSessionInfoCard">
                <div className="GroupSessionCardTitle">
                    <h1>{group.title}</h1>
                    <h4>{group.date} at {group.time}</h4>
                    <h4>37 Sutton Rd, Webster MA</h4>
                </div>
                <div className="GroupSessionCardDesc">
                    <h3>{group.description}</h3>
                </div>
                <div className="GroupSessionCardBottom">
                    <h4 id="employees">Hosted by {group.employees}</h4>
                    <h4>Remaining Slots: {slots}</h4>
                </div>
                <div id="SignUpButton">
                    <button className={`${checkButtonOff() ? "ButtonOff" : "ButtonOn"}`}disabled={checkButtonOff()} onClick={()=>{handleSubmit()}}>{(inGroup === false) ? "Sign Up" : "Cancel Sign-up"  }</button>
                </div>
            </div>
        </div>
    )
}

export default GroupSessionInfo;