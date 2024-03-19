import { useState } from "react";

function UpdateArray(){
    const [foods, setFoods] = useState(["Apple","Mango"])
    function addFood(){
        const newFood = document.getElementById("foodinput").value
        if(newFood!=="")
            setFoods(f =>([...f, newFood]))
        document.getElementById("foodinput").value = ""
    }
    function removeFood(index){
        setFoods(foods.filter((_,i)=> index !== i))
    }
    return (<>
                <div>
                    <h1>List of foods : </h1>
                    <ul>
                        {foods.map((food,index)=> <li key={index} onClick={()=>removeFood(index)} >{food}</li> )}
                    </ul>
                    <input type="text"  id="foodinput" placeholder="Enter food name"/>
                    <button onClick={addFood}>Add Food</button>
                </div>
            </>);
}
export default UpdateArray