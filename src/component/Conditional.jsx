import React from "react";


function Conditional() {
    let day="good afternoon"
    return (
     <div>
     {day==="good afternoon"?<h1>good afternoon</h1>:<h1>good                  
      evening </h1>}
    </div>
    )
}

export default Conditional;
