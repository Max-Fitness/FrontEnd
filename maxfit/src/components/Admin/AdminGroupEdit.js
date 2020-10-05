import React, {useState, useEffect} from "react";
import {useParams, useHistory, Link} from "react-router-dom";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import "../../styles/groupForms.css"

const AdminGroupEdit = () =>{
    const {id} = useParams();
    const {push} = useHistory();
    const [formData, setFormData] = useState(
        {
            id: 0,
            title: "",
            description: "",
            date: "",
            time: "",
            employees: "",
            regNames: "",
            regIds: "",
        }
    )
    const [group, setGroup] = useState({})
    useEffect(()=>{
        axiosWithAuth()
        .get(`/api/groups/${id}`)
        .then(res=>{
            setFormData({
                id: res.data.id,
                title: res.data.title,
                description: res.data.description,
                date: res.data.date,
                time: res.data.time,
                employees: res.data.employees,
                regNames: res.data.regNames,
                regIds: res.data.regIds
            })
            setGroup(res.data)
        })
    },[])

    const handleChange = e =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () =>{
        axiosWithAuth()
        .put(`/api/groups/${id}`, formData)
        .then(res=>{
            setGroup(res.data)
            alert("Group succesfully updated!")
            push(`/admin/groups/info/${id}`)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const deleteGroup = () =>{
        axiosWithAuth()
        .delete(`/api/groups/${id}`)
        .then(res=>{
            alert("Group succesfully deleted!")
            push('/admin/groups')
        })
        .catch(err=>{
            alert("Unable to delete group, please try again later!")
        })
    }

    return(
        <div className="GroupFormWrapper">
            <Link to="/admin/groups">Back to View Groups</Link>
            <div className="GroupFormContent">
                <div className="GroupFormTitle">
                    <h2>Editing Group "{group.title}" on {group.date} at {group.time} EST</h2>
                </div>
                <form>
                    <div className="groupFormInput">
                        <p>Title *</p>
                        <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                        />
                    </div>
                    <br/>
                    <div className="groupFormInput">
                        <p>Description *</p>
                        <input
                        type="text"
                        name="description"
                        placeholder="Group Description"
                        value={formData.description}
                        onChange={handleChange}
                        />
                    </div>
                    <br/>
                    <div className="groupFormInput">
                        <p>Date *</p>
                        <input
                        type="text"
                        name="date"
                        placeholder="Date"
                        value={formData.date}
                        onChange={handleChange}
                        />
                    </div>
                    <br/>
                    <div className="groupFormInput">
                        <p>Time *</p>
                        <input
                        type="text"
                        name="time"
                        placeholder="Time"
                        value={formData.time}
                        onChange={handleChange}
                        />
                    </div>
                    <br/>
                    <div className="groupFormInput">
                        <p>Employees *</p>
                        <input
                        type="text"
                        name="employees"
                        placeholder="Employees"
                        value={formData.employees}
                        onChange={handleChange}
                        />
                    </div>
                    <br/>
                </form>
                <button onClick={()=>{handleSubmit()}}>Submit Changes</button>
                <button onClick={()=>{deleteGroup()}}>Delete Group</button>
            </div>
        </div>
    )
}

export default AdminGroupEdit;