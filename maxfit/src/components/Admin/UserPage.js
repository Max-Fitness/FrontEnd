import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const UserPage = () =>{
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axiosWithAuth()
        .get('/api/users')
        .then(res=>{
            setUsers(res.data)
        })
    })
    
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


    return(
        <div>
            {users.map(user=>{
                return(
                    <div className="UserCard">
                        <p>{user.fName} {user.lName}</p>
                        <p>{getUserRole(user)}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default UserPage