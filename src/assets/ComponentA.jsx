import { createContext, useState } from "react"
import ComponentB from "./ComponentB.jsx"

export const UserUseContext = createContext()

function ComponentA(){
    const [user,setUser]= useState("Ashish")

    return(
        <div className="container CA">
            <h1>Component A</h1>
            <h2>{`>> Hii ${user}`}</h2>
            <UserUseContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserUseContext.Provider>
        </div>
        
    )
}
export default ComponentA