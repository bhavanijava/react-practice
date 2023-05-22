import {useRef,useState} from "react";
import axios from "axios";
const Put=()=>{
    const box1=useRef("");
    const box2=useRef("");
    const [res,setRes]=useState({});

    const my_func=()=>{
        axios.put(`https://reqres.in/api/users/2`,{'name':box1.current.value,
        'job':box2.current.value}).then((postRes)=>{
            const {data}=postRes;
            setRes(data);
        },((errRes)=>{
            console.log(errRes);
        }))
    }
    return(
        <>
            <fieldset style={{width:200,
                               height:200,
                               position:"absolute",
                               left:"50%",
                               top:"50%",
                               transform:"translate(-50%,-50%)"}}>
                <input type={"text"} ref={box1}></input>
                <br></br><br></br>
                <input type={"text"} ref={box2}></input>
                <br></br><br></br>
                <button onClick={my_func} className="btn btn-success btn-sm">Send</button>
                {
                    Object.keys(res).length==0?(<div></div>):(<h1>{JSON.stringify(res)}</h1>)
                }

            </fieldset>
        </>
    )
}
export default Put;