
function Button(){
    let count = 0;
    
    // const handleclick = (name)=>{
    //     if(count < 3)
    //         console.log("Hiiiii Ashish !!")
    //     else
    //         console.log(`${name} stop clicking me !!`)
    //     count++;
    // }
    // const handleclickname = (name)=> console.log(`${name} stop clicking me 😭`)

    const handleclick = (e)=>{
        e.target.textContent ='How are you'
    }

    return (<button onClick={(e)=>handleclick(e)}>Click me 😭</button>);
}
export default Button