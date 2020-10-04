import React from "react"
import {Link} from "react-router-dom"

const AdminNav = () =>{
    return(
        <div className="adminNav">
            <Link to="/admin/users">View Users</Link>
            <Link to="/admin/groups">View Groups</Link>
            <Link to="/admin/groups/create">Create Group</Link>
        </div>
    )
}

export default AdminNav;