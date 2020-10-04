import React, {useState, useEffect} from "react";
import AdminNav from "./AdminNav";
import "../../styles/index.css"

const AdminPage = () =>{
    const [users, setUsers] = useState([])
    const [groups, setGroups] = useState([])

    return(
        <div className="AdminPageWrapper">
            <AdminNav />
        </div>
    )
}

export default AdminPage