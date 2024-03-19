import { useState } from "react";

function UpdateObjects(){
    const [car,setCar] = useState({year:2024,make:"TATA", model: "NEXON"});
    function changeyear(e){
        setCar(c =>({...c , year:e.target.value}))
    }
    // ...c => ka matlab hai ki sari values pahle vali hi hai then uske baad hamne year ki value change kar di aur baki ki as it is rakh di
    // agar ...c nhi likha to jaise hi ham koi bhi value change karte hai baki ke values hat jate hai 
    function changemake(e){
        setCar(c =>({...c , make:e.target.value}))
    }
    function changemodel(e){
        setCar(c =>({...c , model:e.target.value}))
    }

    return (<>
                <h3>My Favourite Car is : {car.make} {car.model}, {car.year} </h3>
                <input type="number" value={car.year} onChange={changeyear}/>
                <br />
                <input type="text" value={car.make} onChange={changemake}/>
                <br />
                <input type="text" value={car.model} onChange={changemodel}/>
            </>
    );

}
export default UpdateObjects