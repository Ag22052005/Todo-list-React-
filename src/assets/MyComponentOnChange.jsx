import { useState } from "react"

function MyComponentOnChange(){
    
    const [name , setName] = useState("Unknown")
    function handleName(e){
        setName(e.target.value)
    }
    const [quantity , setQuantity] = useState(0)
    function handleQuantity(e){
        setQuantity(e.target.value)
    }
    const [comment , setComment] = useState(0)
    function handleComment(e){
        setComment(e.target.value)
    }
    const [payment , setPayment] = useState("")
    function handlePayment(e){
        setPayment(e.target.value)
    }
    const [shipping , setshipping] = useState("")
    function handleshipping(e){
        setshipping(e.target.value)
    }


    return (
        <div>

            <label > Name: </label>
            <input type="text" placeholder="Enter Item Name"  onChange={handleName}/>
            <p>Name : {name}</p>

            <label > Quantity : </label>
            <input type="number"  onChange={handleQuantity}/>
            <p>Quantity : {quantity}</p>

            <label > Comment : </label>
            <br />
            <textarea cols="30" rows="4" placeholder="Leave a comment" onChange={handleComment}></textarea>
            <p>Comment : {comment}</p>

            <label>Payment :  </label>
            <select onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="Gpay">Gpay</option>
                <option value="Paytm">Paytm</option>
                <option value="UPI">UPI</option>
                <option value="Cash On Delivery">Cash On Delivery</option>
            </select>
            <p>Payment : {payment}</p>

            <label >
                <input type="radio" value = "Pick Up" checked ={shipping === "Pick Up"} onChange={handleshipping}/>
                Pick Up
            </label>
            <br />
            <label >
                <input type="radio" value = "Delivery" checked ={shipping === "Delivery"} onChange={handleshipping}/>
                Delivery
            </label>
            <p>Shipping : {shipping}</p>
        </div>
    )
}
export default MyComponentOnChange 