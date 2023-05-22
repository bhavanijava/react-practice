import {useRef,useState} from "react";
import axios from "axios";



const Get=()=>{

    const user_id=useRef();
    const [arr,setArr]=useState([]);
    const fetch=()=>{
        axios.get(``)
    }

    return(
        <>
            <div className="container mt-5">
                <input type={"number"} className="m-2" ref={user_id}></input>
                <button className="btn btn-success" onClick={fetch}>Fetch</button>
            </div>
        </>
    )
}
export default Get;