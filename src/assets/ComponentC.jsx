import ComponentD from "./ComponentD.jsx"
import {UserUseContext} from "./ComponentA.jsx"
import { useContext } from "react"
function ComponentC(){
    const user = useContext(UserUseContext)
    return(
        <div className="container CC">
            <h1>Component C</h1>
            <h2>{`>> When you are coming ${user} ?`}</h2>
            <ComponentD/>
        </div>
        
    )
}
export default ComponentC