import React from 'react';
import { BrowserRouter as Router, Route, Link, useHistory, Redirect } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import TwitterFeed from './components/Social/TwitterFeed';
import HomePage from "./components/HomePage/HomePage";
import Team from "./components/HomePage/Team";
import ProtectedRoute from "./utils/ProtectedRoute";
import EmployeeProtected from "./utils/EmployeeProtected";
import LoginForm from "./components/Login/LoginForm";
import GroupSessions from './components/GroupSessions/GroupSessions';
import GroupSessionInfo from "./components/GroupSessions/GroupSessionInfo";
import FacebookFeed from "./components/Social/FacebookFeed";
import RegisterForm from "./components/Login/RegisterForm";
import AdminPage from "./components/Admin/AdminPage";
import UserPage from "./components/Admin/UserPage"
import UserInfoPage from "./components/Admin/UserInfoPage";
import AdminGroups from "./components/Admin/AdminGroups";
import AdminGroupInfo from "./components/Admin/AdminGroupInfo";
import AdminGroupEdit from "./components/Admin/AdminGroupEdit";
import AdminGroupCreate from "./components/Admin/AdminGroupCreate";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Router>
        <div className="App">
          <Nav />
          <div className="AppWrapper">
            <FacebookFeed />
            <Route exact path="/"><HomePage /></Route>
            <Route exact path="/pricing"><h1>Page is under maintenance! Please come back later!</h1></Route>
            <ProtectedRoute exact path="/group-sessions" component={() => <GroupSessions/> } />
            <ProtectedRoute exact path="/group-sessions/:id" component={() => <GroupSessionInfo/> } />
            <Route exact path="/contact"><h1>Page is under maintenance! Please come back later!</h1></Route>
            <Route exact path="/login"><LoginForm/></Route>
            <Route exact path="/register"><RegisterForm /></Route>
            <ProtectedRoute exact path="/profile" component={()=><Profile/> }/>
            <EmployeeProtected exact path="/admin" component={()=> <AdminPage />}/>
            <EmployeeProtected exact path="/admin/users" component={()=> <UserPage />} />
            <EmployeeProtected exact path="/admin/users/:id" component={()=><UserInfoPage/>} />
            <EmployeeProtected exact path="/admin/groups" component={()=><AdminGroups/>}/>
            <EmployeeProtected exact path="/admin/groups/info/:id" component={()=><AdminGroupInfo />}/>
            <EmployeeProtected exact path="/admin/groups/edit/:id" component={()=><AdminGroupEdit/>}/>
            <EmployeeProtected exact path="/admin/groups/create" component={()=><AdminGroupCreate/>}/>
          </div>
          {/* <Route exact path="/"><Team /></Route> */}
          <div id="copyright">
            <p>Developed with Create-React-App by Steven Spencer, 2020</p>
          </div>
        </div>
    </Router>
  );
}

export default App;
