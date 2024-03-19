import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0)
    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
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
export default Counter