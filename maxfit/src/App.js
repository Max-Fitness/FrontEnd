import React from 'react';
import { BrowserRouter as Router, Route, Link, useHistory, Redirect } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import TwitterFeed from './components/twitter/TwitterFeed';
import HomePage from "./components/HomePage/HomePage";
import Team from "./components/HomePage/Team";
import ProtectedRoute from "./utils/ProtectedRoute";
import LoginForm from "./components/Login/LoginForm";

function App() {
  return (
    <Router>
        <div className="App">
          <Nav />
          <div className="test">
            <TwitterFeed />
            <Route exact path="/"><HomePage /></Route>
            <Route exact path="/pricing"><h1>Pricing Page</h1></Route>
            <ProtectedRoute exact path="/group-sessions" component={() => <h1>"You're logged in!"</h1> } />
            <Route exact path="/contact"><h1>Contact Page</h1></Route>
            <Route exact path="/login"><LoginForm/></Route>
          </div>
          <Route exact path="/"><Team /></Route>
        </div>
    </Router>
  );
}

export default App;
