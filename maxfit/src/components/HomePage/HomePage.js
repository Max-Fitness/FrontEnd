import React, {useState, useEffect} from "react";
import ovalLogo from "../../images/ovalLogo.png"
import "../../styles/homepage.css"
import axios from "axios"

const HomePage = () =>{
    const [content, setContent] = useState({})
    useEffect(()=>{
        axios.get("https://max-fitness.herokuapp.com/info")
        .then(res=>{
            setContent(res.data[0])
        })
    })
    return(
        <div className="hpWrapper">
            <img className="hpImg" src={ovalLogo} />
            <div className="hpIntroWrapper">
                <h1>{content.introTitle}</h1>
                <p>{content.introText}</p>
            </div>
            <div className="hpTextWrapper">
                <div className="hpTextBox">
                    <h2>{content.introSubTitleA}</h2>
                    <p>{content.introSubTextA}</p>
                </div>
                <div className="hpTextBox">
                    <h2>{content.introSubTitleB}</h2>
                    <p>{content.introSubTextB}</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;