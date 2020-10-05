import React, {useState} from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import {Link} from "react-router-dom"

const AdminGroupCreate = () =>{
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        employees: "",
        regNames: "",
        regIds: ""
    })

    const handleChanges = e =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () =>{
        axiosWithAuth()
        .post("/api/groups", formData)
        .then(res=>{
            window.location.reload(false);
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className="GroupFormWrapper">
            <Link to="/admin">Back to Site Management</Link>
            <div className="GroupFormContent">
                <div className="GroupFormTitle">
                    <h2>Creating New Group</h2>
                </div>
                <form>
                    <div className="groupFormInput">
                        <p>Title *</p>
                        <input type="text" name="title" placeholder="Title" onChange={handleChanges} value={formData.title} />
                    </div>
                    <br/>
                    <div className="groupFormInput">
                        <p>Description *</p>
                        <input type="text" name="description" placeholder="Description" onChange={handleChanges} value={formData.description} />
                    </div>
                    <br/>
                    <div className="groupFormInput">
                        <p>Date *</p>
                        <input type="text" name="date" placeholder="Date" onChange={handleChanges} value={formData.date} />
                    </div>
                    <br/>
                    <div className="groupFormInput">
                        <p>Time *</p>
                        <input type="text" name="time" placeholder="Time" onChange={handleChanges} value={formData.time} />
                    </div>
                    <br/>
                    <div className="groupFormInput">
                        <p>Employees *</p>
                        <input type="text" name="employees" placeholder="Employees" onChange={handleChanges} value={formData.employees} />                
                    </div>
                </form>
                <button onClick={()=>{handleSubmit()}}>Create New Group</button>
            </div>
        </div>
    )
}

export default AdminGroupCreate;