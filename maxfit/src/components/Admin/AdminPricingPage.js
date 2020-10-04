import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth"
import "../../styles/pricing.css"
import {Link } from "react-router-dom";

const AdminPricingPage = () =>{
    const [pricing, setPricing] = useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get("/pricing")
        .then(res=>{
            let temp = res.data.sort(function(a, b){return (parseInt(a.id) - parseInt(b.id))})
            setPricing(temp)
        })
    },[])

    const deletePrice = (id) =>{
        axiosWithAuth()
        .delete(`/pricing/${id}`)
        .then(res=>{
            let temp = res.data.sort(function(a, b){return (parseInt(a.id) - parseInt(b.id))})
            setPricing(temp)
        })
        .catch(err=>{
            console.log(err)
            alert("Unable to delete pricing! Please try again later!")
        })
    }

    return(
        <div className="PricePageWrapper">
            {pricing.map(price=>(
                <div className="PriceCard">
                    <h1>{price.title}</h1>
                    <h3>{price.description}</h3>
                    <h3>{price.price}</h3>
                    <Link to={`/admin/edit-pricing/${price.id}`}><button>Edit</button></Link>
                    <button onClick={()=>{deletePrice(price.id)}}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default AdminPricingPage;