import React from "react"
import {Link} from "react-router-dom"
import "../../styles/navbar.css"

const AdminNav = () =>{
    return(
        <div className="adminNav">
            <Link to="/admin/site">Edit Site Text</Link>
            <Link to="/admin/users">View Users</Link>
            <Link to="/admin/groups">View Groups</Link>
            <Link to="/admin/view-pricing">View Pricings</Link>
            <Link to="/admin/create-pricing">Create Pricing</Link>
            <Link to="/admin/groups/create">Create Group</Link>
        </div>
    )
}

export default AdminNav;