import { useState } from "react";


const ChangeState1=()=>{
    const [count,setCount]=useState(0);
    const my_func=()=>{
        setCount(count+1);
       
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={my_func}>Change</button>
        </>
    )
}
export default ChangeState1;