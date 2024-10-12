import React,{useState} from 'react'

function State() {
    const[x,setX]=useState(0);
    const btnClick=()=> {
        console.log("clicked")
        setX(x+1);
        console.log(x);
        
    }
    return (
        <div>
        {x}
        <button onClick={()=>{btnClick()}}>Click me many times to know more about me</button>
        
        </div>
    )
    
}

export default State