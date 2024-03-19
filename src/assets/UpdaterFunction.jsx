
import { useState } from "react";

function UpdaterFunction(){
    const [count,setCount] = useState(0)
    const increment = ()=>{
        // This will work for 1 function means count increased by one only same for decrement 
        // hence we use updater function which is arrow function 

        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)

        setCount(c =>c+1)
        setCount(c =>c+1)
        setCount(c =>c+1)
    }
    const decrement = ()=>{
        // setCount(count-1)
        setCount(c =>c-1)
        setCount(c =>c-1)
        setCount(c =>c-1)
    }
    const reset = ()=>{
        setCount(0)
    }

    return (<>
            <div className="container">
            <h1 className="showcount">{count}</h1>
            <div className="buttons">
                <button className="btn" onClick={decrement}>Decrement</button>
                <button className="btn" onClick={reset}>Reset</button>
                <button className="btn" onClick={increment}>Increment</button>
            </div>
            </div>
            </>);
}
export default UpdaterFunction