import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import {Link} from "react-router-dom"
import "../../styles/profile.css"

const UserPage = () =>{
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    useEffect(()=>{
        axiosWithAuth()
        .get('/api/users')
        .then(res=>{
            let temp = []
            let admins = []
            let employees = []
            let members = []
            let nonmembers = []
            for(let i = 0; i < res.data.length; i++){
                if(parseInt(res.data[i].role, 10) >= 4){
                    admins.push(res.data[i])
                }
                else if(parseInt(res.data[i].role, 10) === 3){
                    employees.push(res.data[i])
                }
                else if(parseInt(res.data[i].role, 10) === 2){
                    members.push(res.data[i])
                }
                else if(parseInt(res.data[i].role, 10) === 1){
                    nonmembers.push(res.data[i])
                }
            }
            for(let i = 0; i < admins.length; i++){
                temp.push(admins[i])
            }
            for(let i = 0; i < employees.length; i++){
                temp.push(employees[i])
            }
            for(let i = 0; i < members.length; i++){
                temp.push(members[i])
            }
            for(let i = 0; i < nonmembers.length; i++){
                temp.push(nonmembers[i])
            }
            setUsers(temp)
        })
    }, [])
    
    const getUserRole = (user) =>{
        if(parseInt(user.role, 10) === 1){
            return "Non-Member"
        }
        else if(parseInt(user.role, 10) === 2){
            return "Member"
        }
        else if(parseInt(user.role, 10) === 3){
            return "Employee"
        }
        else if(parseInt(user.role, 10) === 4){
            return "Admin"
        }
        else{
            return `Role: ${user.role}`
        }
        
    }

    const handleChange = e =>{
        setSearch(e.target.value)
    }

    const searchMembers = e => {
        e.preventDefault();
        const input = search.toLowerCase();
        const searchResults = users.filter( user => {
            let userFull = user.fName + " " + user.lName
            if (userFull != null) {
                return userFull.toLowerCase().includes(input)
            }
            
        })
        setUsers(searchResults);
    }


    return(
        <div className="UserPage">
            <Link to="/admin">Back to Site Management</Link>
            <form onSubmit={searchMembers}>
                <input type="text" name="search" placeholder="Search Members" onChange={handleChange} value={search} />
                <button>Search</button>
            </form>
            {users.map(user=>{
                return(
                    <Link to={`/admin/users/${user.id}`}>
                        <div className="UserCard">
                            <h3>{user.fName} {user.lName}</h3>
                            <h4>{getUserRole(user)}</h4>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default UserPage