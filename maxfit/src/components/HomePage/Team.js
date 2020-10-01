import React, {useState, useEffect} from "react";
import loginImg from "../../images/loginImg.png"
import "../../styles/homepage.css"

const dummyData = [
    {
        fName: "John",
        lName: "Doe",
        position: "Owner",
        about: "Just a lovely owner of a fancy gym",
        image: loginImg
    },
    {
        fName: "John",
        lName: "Doe",
        position: "General Manager",
        about: "Just a lovely general manager of a fancy gym",
        image: loginImg
    },
    {
        fName: "Doug",
        lName: "McFarland",
        position: "Automotive Technician",
        about: "Wait this isn't a garage",
        image: loginImg
    },
    {
        fName: "John",
        lName: "Doe",
        position: "Employee Tier 1",
        about: "Just a lovely employee tier 1 of a fancy gym",
        image: loginImg
    },
    {
        fName: "Doseph",
        lName: "Johnson",
        position: "Fired ex employee",
        about: "They always said I could be anything I ever wanted. So I robbed a bank.",
        image: loginImg
    },
    {
        fName: "John",
        lName: "Doe",
        position: "Trainee",
        about: "I work where?",
        image: loginImg
    },

]


const Team = () =>{
    const [data, setData] = useState(dummyData)

    return(
        <div className="EmployeesFullWrapper">
            <h1>Meet the Team</h1>
            <div className="Employees">
                {data.map(employee=>{
                    return(
                        <div className="EmployeeCard">
                            <img src={employee.image} />
                            <h2>{employee.fName} {employee.lName}</h2>
                            <h3>{employee.position}</h3>
                            <p>"{employee.about}"</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Team;