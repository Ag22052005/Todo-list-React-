import { useState } from "react"

function UpdateArrayOfObjects(){

    const [car,setCar] = useState([])
    const [carYear,setYear] = useState(new Date().getFullYear())
    const [carMake,setMake] = useState("")
    const [carModel,setModel] = useState("")

    function addCar(){
        const newCar = {year:carYear,make:carMake,model:carModel};
        if(carYear !==  "" &&  carMake !==  "" &&  carModel !==  "")
            setCar(c=>([...c,newCar]))
        else
            alert("Enter the Data")
        setYear(new Date().getFullYear())
        setMake("")
        setModel("")
    }
    function removeCar(index){
        setCar(c => c.filter((_,i)=> index!==i ))
    }
    function changeYear(e){
        setYear(e.target.value)
    }
    function changeMake(e){
        setMake(e.target.value)
    }
    function changeModel(e){
        setModel(e.target.value)
    }


    return (<>
                <div>
                <h1>List of Cars : </h1>
                <ul>
                    {car.map((element,index)=> <li key={index} onClick={()=>removeCar(index)}>{element.make} {element.model} , {element.year}</li> )}
                </ul>
                <input type="number" value ={carYear} placeholder="Enter Car Year " onChange={changeYear}/> <br />
                <input type="text" value ={carMake} placeholder="Enter Car Make  " onChange={changeMake}/> <br />
                <input type="text" value ={carModel} placeholder="Enter Car Model " onChange={changeModel}/> <br />
                <button onClick={addCar}>Add Car </button>
                </div>
            </>)
}
export default UpdateArrayOfObjects