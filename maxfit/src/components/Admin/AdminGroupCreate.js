import React, {useState} from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";

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
        <div className="AdminFormWrapper">
            <div className="AdminFormContent">

                <div className="AdminForm">
                    <form>
                        <input type="text" name="title" placeholder="Title" onChange={handleChanges} value={formData.title} />
                        <input type="text" name="description" placeholder="Description" onChange={handleChanges} value={formData.description} />
                        <input type="text" name="date" placeholder="Date" onChange={handleChanges} value={formData.date} />
                        <input type="text" name="time" placeholder="Time" onChange={handleChanges} value={formData.time} />
                        <input type="text" name="employees" placeholder="Employees" onChange={handleChanges} value={formData.employees} />                
                    </form>
                    <button onClick={()=>{handleSubmit()}}>Create New Group</button>
                </div>

            </div>
        </div>
    )
}

export default AdminGroupCreate;