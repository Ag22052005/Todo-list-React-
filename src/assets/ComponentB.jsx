import ComponentC from "./ComponentC.jsx"
import {UserUseContext} from "./ComponentA.jsx"
import { useContext } from "react"

function ComponentB(){
    const user = useContext(UserUseContext)
    return(
        <div className="container CB">
            <h1>Component B</h1>
            <h2>{`>> How are you ${user}?`}</h2>
            <ComponentC/>
        </div>
        
    )
}
export default ComponentB