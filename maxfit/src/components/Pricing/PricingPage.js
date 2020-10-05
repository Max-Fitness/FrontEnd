import React, {useState, useEffect} from "react";
import axios from "axios";
import "../../styles/pricing.css"

const PricingPage = () =>{
    const [pricing, setPricing] = useState([])

    useEffect(()=>{
        axios.get("https://max-fitness.herokuapp.com/pricing")
        .then(res=>{
            let temp = res.data.sort(function(a, b){return (parseInt(a.id) - parseInt(b.id))})
            setPricing(temp)
        })
    }, [])
    return(
        <div className="PricePageWrapper">
            {pricing.map(price=>(
                <div className="PriceCard">
                    <h1>{price.title}</h1>
                    <h3>{price.description}</h3>
                    <h3>{price.price}</h3>
                </div>
            ))}
        </div>
    )

}

export default PricingPage;