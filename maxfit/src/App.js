import React from 'react';
import { BrowserRouter as Router, Route, Link, useHistory, Redirect } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import TwitterFeed from './components/Social/TwitterFeed';
import HomePage from "./components/HomePage/HomePage";
import Team from "./components/HomePage/Team";
import ProtectedRoute from "./utils/ProtectedRoute";
import LoginForm from "./components/Login/LoginForm";
import GroupSessions from './components/GroupSessions/GroupSessions';
import GroupSessionInfo from "./components/GroupSessions/GroupSessionInfo";
import FacebookFeed from "./components/Social/FacebookFeed";

function App() {
  return (
    <Router>
        <div className="App">
          <Nav />
          <div className="test">
            <FacebookFeed />
            <Route exact path="/"><HomePage /></Route>
            <Route exact path="/pricing"><h1>Page is under maintenance! Please come back later!</h1></Route>
            <ProtectedRoute exact path="/group-sessions" component={() => <GroupSessions/> } />
            <ProtectedRoute exact path="/group-sessions/:id" component={() => <GroupSessionInfo/> } />
            <Route exact path="/contact"><h1>Page is under maintenance! Please come back later!</h1></Route>
            <Route exact path="/login"><LoginForm/></Route>
          </div>
          <Route exact path="/"><Team /></Route>
          <div id="copyright">
            <p>Developed with Create-React-App by Steven Spencer, 2020</p>
          </div>
        </div>
    </Router>
  );
}

export default App;
