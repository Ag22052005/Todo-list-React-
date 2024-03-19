import { useState } from "react";

function MyComponent(){

    const [name,setName] = useState("Guest")
    const updatename = ()=>{
        setName("Ashish")
    }
    const [age,setAge] = useState(0)
    const updateage = ()=>{
        setAge(age+1)
    }
    const [isEmployeed,setIsEmployeed] = useState(false)
    const togglestatus = ()=>{
        setIsEmployeed(!isEmployeed)
    }

    return (<div>
            <p>Name : {name} </p>
            <button onClick={updatename}>Update Name </button>

            <p>Age : {age} </p>
            <button onClick={updateage}>Increase Age </button>

            <p>Is Employeed : {isEmployeed? "Yes":"No"} </p>
            <button onClick={togglestatus}>Change Status</button>
            </div>)
}
export default MyComponent;