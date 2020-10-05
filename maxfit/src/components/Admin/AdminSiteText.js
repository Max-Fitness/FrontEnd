import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import descImg1 from "../../images/DescImg1.png"
import descImg2 from "../../images/DescImg2.png"
import descImg3 from "../../images/DescImg3.png"

const AdminSiteText = () =>{
    const [formData, setFormData] = useState({})
    useEffect(()=>{
        axiosWithAuth()
        .get('/info/1')
        .then(res=>{
            console.log(res.data)
            setFormData(res.data)
        })
    },[])

    const handleChanges = e =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = () =>{
        axiosWithAuth()
        .put("/info/1", formData)
        .then(res=>{
            alert("Successfully Updated Site!")
        })
        .catch(err=>{
            console.log(err)
            alert("Unable to update site, please try again later!")
        })

    }

    return(
        <div className="GroupFormWrapper">
            <div className="GroupFormContent">
                <div className="GroupFormTitle">
                    <h2>Edit Site Text</h2>
                </div>
                <form>
                    <div className="groupFormInput">
                        <p>Main Title Text *</p>
                        <input type="text" name="introTitle" placeholder="Intro Title" onChange={handleChanges} value={formData.introTitle} />
                    </div>
                    <div className="groupFormInput">
                        <p>Main Description Text *</p>
                        <input type="text" name="introText" placeholder="Intro Text" onChange={handleChanges} value={formData.introText} />
                    </div>
                    <div className="groupFormInput">
                        <p>Sub Title Left *</p>
                        <input type="text" name="introSubTitleA" placeholder="Intro Sub Title Left" onChange={handleChanges} value={formData.introSubTitleA} />
                    </div>
                    <div className="groupFormInput">
                        <p>Sub Text Left *</p>
                        <input type="text" name="introSubTextA" placeholder="Intro Sub Text Left" onChange={handleChanges} value={formData.introSubTextA} />
                    </div>
                    <div className="groupFormInput">
                        <p>Sub Title Right *</p>
                        <input type="text" name="introSubTitleB" placeholder="Intro Sub Title Right" onChange={handleChanges} value={formData.introSubTitleB} />
                    </div>
                    <div className="groupFormInput">
                        <p>Sub Text Right *</p>
                        <input type="text" name="introSubTextB" placeholder="Intro Sub Text Right" onChange={handleChanges} value={formData.introSubTextB} />
                    </div>
                    <div className="groupFormInput">
                        <p>Group Sessions Title *</p>
                        <input type="text" name="groupTitle" placeholder="Group Sessions Title" onChange={handleChanges} value={formData.groupTitle} />
                    </div>
                    <div className="groupFormInput">
                        <p>Group Sessions Text *</p>
                        <input type="text" name="groupText" placeholder="Group Sessions Text" onChange={handleChanges} value={formData.groupText} />
                    </div>
                    <div className="groupFormInput">
                        <p>Contact Phone</p>
                        <input type="text" name="contactPhone" placeholder="Contact Phone Number" onChange={handleChanges} value={formData.contactPhone} />
                    </div>
                    <div className="groupFormInput">
                        <p>Contact Address</p>
                        <input type="text" name="contactAddress" placeholder="Contact Address" onChange={handleChanges} value={formData.contactAddress} />
                    </div>
                    <div className="groupFormInput">
                        <p>Contact Facebook</p>
                        <input type="text" name="contactFacebook" placeholder="Facebook Address" onChange={handleChanges} value={formData.contactFacebook} />
                    </div>
                    <div className="groupFormInput">
                        <p>Contact Twitter</p>
                        <input type="text" name="contactTwitter" placeholder="Twitter Address" onChange={handleChanges} value={formData.contactTwitter} />
                    </div>
                    <div className="groupFormInput">
                        <p>Contact Instagram</p>
                        <input type="text" name="contactInstagram" placeholder="Instagram Address" onChange={handleChanges} value={formData.contactInstagram} />
                    </div>
                    <div className="groupFormInput">
                        <p>Contact Youtube</p>
                        <input type="text" name="contactYoutube" placeholder="Youtube Address" onChange={handleChanges} value={formData.contactYoutube} />
                    </div>
                    <div className="groupFormInput">
                        <p>Contact LinkedIn</p>
                        <input type="text" name="linkedIn" placeholder="LinkedIn Address" onChange={handleChanges} value={formData.linkedIn} />
                    </div>
                </form>
                <button onClick={()=>{handleSubmit()}}>Edit Site Data</button>
                <div className="imgWrapper">
                    <img src={descImg1} />
                    <img src={descImg2} />
                    <img src={descImg3} />
                </div>
            </div>

        </div>
    )

}

export default AdminSiteText