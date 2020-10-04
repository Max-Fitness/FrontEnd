import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import {useParams} from "react-router-dom"

const UserInfoPage = () =>{
    const {id} = useParams();
    const [user, setUser] = useState({})
    const [formData, setFormData] = useState({role: "member"})

    useEffect(()=>{
        axiosWithAuth()
        .get(`/api/users/${id}`)
        .then(res=>{
            setUser(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    const handleRoleChange = (e) =>{
        setFormData({
            role: e.target.value
        })
    }

    const handleSubmit = () =>{
        axiosWithAuth()
        .put(`/api/users/${id}`, formData)
        .then(res=>{
            console.log(res)
            window.location.reload(false)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
    <div className="UserInfoPage">
        <h1>{user.fName} {user.lName}</h1>
        <h3>Role: {user.role}</h3>
        <h3>Email: {user.email}</h3>
        <select id="role" name="role" onChange={handleRoleChange}>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
            <option selected="selected" value="member">Member</option>
            <option value="non-member">Non-Member</option>
        </select>
        <button onClick={()=>{handleSubmit()}}>Change Role</button>

    </div>
    )
}
export default UserInfoPage