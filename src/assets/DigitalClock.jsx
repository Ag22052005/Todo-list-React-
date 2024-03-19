import { useEffect, useState } from "react"

function DigitalClock(){

    const [time,setTime] = useState(new Date())

    useEffect(()=>{
        const intervalid =  setInterval(() => {
            setTime(new Date())
        }, 1000);

        return (()=>{
            clearInterval= intervalid
        })
    },[])

    function display(){
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const ampm = hours>12?"  PM":"  AM"

        hours = hours%12 || 12
        
        // return(<h1> 
        //     {`${modify(hours)}:${modify(minutes)}:${modify(seconds)} ${ampm}`} 
        //     </h1>)
        return(<h1> 
                <span className="time">{modify(hours)}</span>
                <span className="time">{modify(minutes)}</span>
                <span className="time">{modify(seconds)}  </span>
                <span>{ampm}</span>
            </h1>)
    }
    function modify(number){
        return (number>9?"":"0")+ number
    }

    return (
        <>
            <div className="clockContainer">
                <div className="clock">
                    <span>{display()}</span>
                </div>
            </div>
        </>
    )
}
export default DigitalClock