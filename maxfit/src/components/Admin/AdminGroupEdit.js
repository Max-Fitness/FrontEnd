import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {axiosWithAuth} from "../../utils/axiosWithAuth";

const AdminGroupEdit = () =>{
    const {id} = useParams();
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
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return(
        <div className="AdminFormEditWrapper">
            <h2>Editing Group "{group.title}" on {group.date} at {group.time} EST</h2>
            <div className="AdminEditForm">
                <form>
                    <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    />
                    <br/>
                    <input
                    type="text"
                    name="description"
                    placeholder="Group Description"
                    value={formData.description}
                    onChange={handleChange}
                    />
                    <br/>
                    <input
                    type="text"
                    name="date"
                    placeholder="Date"
                    value={formData.date}
                    onChange={handleChange}
                    />
                    <br/>
                    <input
                    type="text"
                    name="time"
                    placeholder="Time"
                    value={formData.time}
                    onChange={handleChange}
                    />
                    <br/>
                    <input
                    type="text"
                    name="employees"
                    placeholder="Employees"
                    value={formData.employees}
                    onChange={handleChange}
                    />
                    <br/>
                </form>
                <button onClick={()=>{handleSubmit()}}>Submit Changes</button>
            </div>
        </div>
    )
}

export default AdminGroupEdit;