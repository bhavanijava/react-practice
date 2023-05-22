import {useState} from "react";
const ConditionalRendering=()=>{
    const [bool,setBool]=useState(false);
    const [str1,setStr1]=useState("Hello")
    const [str2,setStr2]=useState("Welcome")
    const my_func=()=>{
        setBool(bool=>!bool);
    }
    return(
        <>
            <button onClick={my_func}>
                Change
            </button>
            {
                bool?<h1>{str1}</h1>:<h1>{str2}</h1>
            }
        </>
    )
}
export default ConditionalRendering;