import React from "react"
import {Link} from "react-router-dom"
import "../../styles/navbar.css"

const AdminNav = () =>{
    return(
        <div className="adminNav">
            {parseInt(localStorage.getItem("role"),10) >= 4 ? <Link to="/admin/site">Edit Site Text</Link> : null}
            {parseInt(localStorage.getItem("role"),10) >= 4 ? <Link to="/admin/users">View Users</Link> : null}
            <Link to="/admin/groups">View Groups</Link>
            {parseInt(localStorage.getItem("role"),10) >= 4 ? <Link to="/admin/view-pricing">View Pricings</Link> : null}
            {parseInt(localStorage.getItem("role"),10) >= 4 ? <Link to="/admin/create-pricing">Create Pricing</Link> : null}
            <Link to="/admin/groups/create">Create Group</Link>
        </div>
    )
}

export default AdminNav;