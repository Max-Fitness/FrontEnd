import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import "../../styles/groupForms.css"

const AdminPricingEdit = () =>{
    const {id} = useParams();
    const {push} = useHistory();
    const [formData, setFormData] = useState(
        {
            title: "",
            description: "",
            price: ""
        }
    )
    const [data, setData] = useState({})

    useEffect(()=>{
        axiosWithAuth()
        .get(`/pricing/${id}`)
        .then(res=>{
            setFormData(res.data)
            setData(res.data)
        })
    },[])

    const handleChanges = e =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () =>{
        axiosWithAuth()
        .put(`/pricing/${id}`, formData)
        .then(res=>{
            push('/admin/view-pricing')
        })
        .catch(err=>{
            console.log(err)
            alert("Could not update pricing, please try again later!")
        })
    }

    return(
        <div className="GroupFormWrapper">
            <div className="GroupFormContent">
                <div className="GroupFormTitle">
                    <h1>Edit Pricing "{data.title}"</h1>
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
                <button onClick={()=>{handleSubmit()}}>Edit Pricing</button>
            </div>
        </div>
    )
}

export default AdminPricingEdit;