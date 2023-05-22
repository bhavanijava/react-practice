import {useState} from "react";
import { Button } from '@material-ui/core';


const ChangeState=()=>{
    const [num,setNum]=useState(0);

    const func_one=()=>{
        setNum(num=>num+1);
    }
    const func_two=()=>{
        setNum(num=>num-1);
    }
    return(
        <>
            <div style={{width:400,height:300,border:"5px dotted green",
                         position:"absolute",left:"50%",top:"50%",
                         transform:"translate(-50%,-50%)",borderRadius:"25px"}}>
                <h1 style={{textAlign:"center",marginTop:50}}>Number:{num}</h1>
                <button style={{margin:40,color:"red",background:"green"}} onClick={func_one} >
                </button>
                <button style={{margin:40,color:"red",background:"green"}} onClick={func_two}>
                    Decrement
                </button>
                <Button color="primary" variant="contained">
                Click Me
                </Button>

            </div>
   
        </>
    )
}
export default ChangeState;