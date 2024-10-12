import React from 'react'

function Event() {
    let c=0;
    const btnClick=()=> {
        c++;
        console.log(c)
        }
        return (
         <div>
            {c}
          <button onClick={()=>{btnClick()}}>Click me many times to know more  
           about me</button>
         </div>
        )
}

export default Event