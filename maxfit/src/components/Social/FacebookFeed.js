import React, {useState, useEffect, Component} from "react";
import { FacebookProvider, Page } from 'react-facebook';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import axios from "axios";

const FacebookFeed = () =>{

  const [fb, setFb] = useState("")
  useEffect(()=>{
    axios.get('https://max-fitness.herokuapp.com/info')
    .then(res=>{
      setFb(res.data[0].contactFacebook)
    })
  },[])


    return (
      <div className="facebookFeed">
        <FacebookProvider appId="348818209662207">
          <Page href={fb} tabs="timeline" height="800px" />
        </FacebookProvider>
      </div>    
    );
}

export default FacebookFeed;