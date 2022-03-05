import react ,{useState} from "react";
function Todos(props){
    const [tap,settap]=useState(false)
    function clicked(){
    settap((prev)=>{return !prev});
    }
    return <div onClick={clicked} >

    <li style={{textDecoration: tap? "line-through":"none"}} >{props.text}</li>
    </div>
}

export default Todos;