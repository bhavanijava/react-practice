import Child1 from "./Child1";
import {useState} from "react";
const Parent1=()=>{
    const [str,setStr]=useState(`ReactJs`);
    const [num,setNum]=useState(100);
    const [bool,setBool]=useState(true);
    const [arr,setArr]=useState([10,20,30,40,50]);
    const [obj,setObj]=useState({key1:`ReactJs`,key2:`NodeJs`});
    const [employees,setEmployees]=([
        {id:1,pid:111,pname:`pone`,pcost:1000},
        {id:2,pid:222,pname:`ptwo`,pcost:2000},
        {id:3,pid:333,pname:`pthree`,pcost:3000},
        {id:4,pid:444,pname:`pfour`,pcost:4000},
        {id:5,pid:555,pname:`pfive`,pcost:5000}
    ]);
    return(
        <>
            <Child1 str={str}
                    num={num}
                    bool={bool}
                    arr={arr}
                    obj={obj}
                    employees={employees}>
                        Welcome to Children

            </Child1>
        </>
    )
}
export default Parent1;