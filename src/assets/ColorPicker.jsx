import { useState } from "react"


function ColorPicker(){

    const [color,setColor] = useState("#FFFFF")
    function handleColor(e){
        setColor(e.target.value)
    }
    
    return (<>
            <div className="main">
            <div className="container">
                <h1>Color Picker</h1>
                <div className="showcolor" style={{backgroundColor:color}}>
                    <p>Selected Color: {color}</p>
                </div>
                <label className="selectcolor">Select a color : </label>
                <input type="color" onChange={(e)=>handleColor(e)} className="colorPicker"/>
            </div>
            </div>
            </>)
}
export default ColorPicker