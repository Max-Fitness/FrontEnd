import React,{useState} from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import "../../styles/groupForms.css"
import {useHistory} from "react-router-dom"

const AdminPricingCreate = () =>{
    const {push} = useHistory();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
    })

    const handleChanges = e =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () =>{
        axiosWithAuth()
        .post('/pricing', formData)
        .then(res=>{
            push('/admin')
        })
        .catch(err=>{
            console.log(err)
            alert("Could not create pricing. Please try again later!")
        })
    }

    return(
        <div className="GroupFormWrapper">
            <div className="GroupFormContent">
                <div className="GroupFormTitle">
                    <h1>Create New Pricing</h1>
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
                        <p>Price *</p>
                        <input type="text" name="price" placeholder="Price" onChange={handleChanges} value={formData.price} />
                    </div>
                </form>
                <button onClick={()=>{handleSubmit()}}>Create New Pricing</button>
            </div>
        </div>
    )
}

export default AdminPricingCreate;