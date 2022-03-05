import react ,{useState} from "react";
function Todos(props){
  
    
    return <div onClick={ ()=>{props.checked(props.id)}} >
    <li >{props.text}</li>
    </div>
}

export default Todos;