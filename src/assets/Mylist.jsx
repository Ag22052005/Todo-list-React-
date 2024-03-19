import { useState } from "react";

function Mylist() {

    const [tasks,setTasks]= useState(["Wake Up"])
    const [newtask, setNewtask] = useState("")
    const [showAddBar, setShowAddBar] = useState(false);
    const [plusTaskBtn,setPlusTaskBtn] = useState("+ Task")

    function handleChangeTask(e){
        setNewtask(e.target.value)
    }
    function addTask(e){
      if(newtask!=''){
        setTasks(t =>[...t,newtask])
        setNewtask("")
        setPlusTaskBtn("+ Task")
        setShowAddBar(prev => !prev)
      }else{
        alert("Enter the Task first")
      }
    }
    function remove(index){
        setTasks( t => t.filter((_,i) => index!==i ))
    }
    function moveUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index - 1];
            updatedTasks[index - 1] = temp;
            setTasks(updatedTasks);
        }
    }
    function moveDown(index){
        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index + 1];
            updatedTasks[index + 1] = temp;
            setTasks(updatedTasks);
        }
    }
    function toggle(){
      if(plusTaskBtn == '+ Task'){
        setPlusTaskBtn("Discard")
        setShowAddBar(prev => !prev)
      }else{
        let ans = confirm("Do you want to discard task ?")
        if(ans){
          setPlusTaskBtn("+ Task")
          setNewtask("")
          setShowAddBar(prev => !prev)
        }
      }
    }

  return (
    <>
      <div className="container">
      <h1>TO DO List</h1>
        <div className="todolist">
          { showAddBar && 
          <div className="addbar" id="add-bar">
            <input type="text" placeholder="Enter a task" value={newtask} id="addinput" onChange={handleChangeTask} />
            <button onClick={addTask} id="addbtn">Add</button>
          </div>
          }
          <ol>
            <div className="list">
                {tasks.map((element,index)=> <li className="list-item" key={index}><div className="text">{element} </div>
                <span className="btns">
                    <button className="remove" onClick={()=>remove(index)}>🗑</button>
                    <button className="moveup" onClick={()=>moveUp(index)}>👆</button>
                    <button className="movedown" onClick={()=>moveDown(index)}>👇</button>
                </span>
                    </li> )}
            </div>
          </ol>
          <div className="plus">
            <button className="plus-btn" onClick={toggle}>{plusTaskBtn}</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Mylist;
