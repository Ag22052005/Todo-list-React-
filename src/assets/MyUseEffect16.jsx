// 1. useEffect(()=>{}) -> Runs after every re-render which means change or update in value , state
// 2. useEffect(()=>{},[]) -> Runs on mount or initialization
// 3. useEffect(()=>{},[dependencies]) -> Runs on mount +  change in dependencies value

//                              16 A
// import { useEffect, useState } from "react"

// function MyUseEffect16(){
//     const [count , setCount]= useState(0)
//     const [color , setColor] = useState("green")

//     useEffect(()=>{
//         document.title = `Count : ${count} , ${color}`
//     },[count,color])

//     function addCount(){
//         setCount(c=>c+1)
//     }
//     function subCount(){
//         setCount(c=>c-1)
//     }
//     function changeColor(){
//         setColor(c=>c==='green'?'red':'green')
//     }

//     return(
//         <>
//             <h1 style={{color:color}}>Count : {count}</h1>
//             <button onClick={addCount}>Add</button>
//             <button onClick={subCount}>Sub</button><br />
//             <button onClick={changeColor}>Change Color</button>

//         </>
//     )
// }
// export default MyUseEffect16

                            //  16 B


import { useEffect, useState } from "react"

function MyUseEffect16(){
    const [width,setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)

    function handleresize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    useEffect(()=>{
        document.title = `size : ${width}x${height}`
    },[width,height])
    useEffect(()=>{
        window.addEventListener("resize",handleresize)
        return(
            window.removeEventListener("resize",handleresize)
        )
    },[width,height])

    return(
        <>
            <p>window-width: {width}px </p>
            <p>window-height: {height}px</p>
        </>
    )
}
export default MyUseEffect16