import React, {useState, useEffect} from "react";
import axios from "axios"
import "../../styles/contact.css"

const ContactPage = () =>{
    const [content, setContent] = useState({})
    useEffect(()=>{
        axios.get('https://max-fitness.herokuapp.com/info')
        .then(res=>{
            setContent(res.data[0])
        })
    },[])

    return(
        <div className="ContactPageWrapper">
            <div className="ContactInfo">
                <h1>Max Fitness</h1>
                <h3>{content.contactAddress}</h3>
                <h3>{content.contactPhone}</h3>
                <h3>{content.contactFacebook}</h3>
                <h3>{content.contactInstagram}</h3>
                <h3>{content.contactTwitter}</h3>
                <h3>{content.contactYoutube}</h3>
                <h3>{content.linkedIn}</h3>
            </div>
        </div>
    )

}

export default ContactPage