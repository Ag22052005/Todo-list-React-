import { useContext } from "react"
import { UserUseContext } from "./ComponentA.jsx"


function ComponentD(){
    const user = useContext(UserUseContext)
    return(

        <div className="container CD">
            <h1>Component D</h1>
            <h2>{`>> Ok bye!! ${user} 🥰`}</h2>
        </div>
        
    )
}
export default ComponentD