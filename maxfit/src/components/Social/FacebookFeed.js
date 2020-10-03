import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';

export default class FacebookFeed extends Component {
  render() {
    return (
      <div className="facebookFeed">
        {console.log("ENV",process.env)}
        <FacebookProvider appId="348818209662207">
          <Page href={`${process.env.REACT_APP_FACEBOOK_URL}`} tabs="timeline" height="800px" />
        </FacebookProvider>
      </div>    
    );
  }
}