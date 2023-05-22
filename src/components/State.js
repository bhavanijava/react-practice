import {useState} from "react";
import "./State.css";
const State=()=>{
    const [str,setStr]=useState(`ReactJs`);
    const [num,setNum]=useState(100);
    const [bool,setBool]=useState(true);
    const [obj,setObj]=useState({key1:`NodeJs`,key2:`ReactJs with JSX`,key3:`MangoDB`})
    const [arr,setArr]=useState([100,200,300,400,500]);
    const [employees,setEmployees]=useState(
        [
            {e_id:111,e_name:`en_one`,e_sal:10000},
            {e_id:222,e_name:`en_two`,e_sal:20000},
            {e_id:333,e_name:`en_three`,e_sal:30000},
            {e_id:444,e_name:`en_four`,e_sal:40000},
            {e_id:555,e_name:`en_five`,e_sal:50000},
        ]
    );
    return(
        <>
            <div className="container mt-5">
                <h1 className="text text-primary">{str}</h1>
                <h1 className="text text-danger">{num}</h1>
                <h1 style={{color:"red",fontSize:"40px",fontWeight:"bold"}}>{JSON.stringify(bool)}</h1>
                <p className="my_class">
                    {obj.key1}...{obj.key2}...{obj.key3}
                </p>

                {
                    arr.map((element,index)=>{
                        return(
                            <>
                                <h6 key={element}>{element}...{index}</h6>
                            </>
                        )
                    })
                }

                <table border={2}
                      align={"center"}
                      cellSpacing={10}
                      cellPadding={10}
                      >
                        <thead>
                            <tr>
                              <th>e_id</th>
                              <th>e_name</th>
                              <th>e_sal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map((element,index)=>{
                                    return(
                                      <tr key={element.e_id} borderwidth={2}>
                                        <td border={2}>{element.e_id }</td>
                                        <td border={2}>{element.e_name}</td>
                                        <td border={2}>{element.e_sal}</td>
                                      </tr>
                                    )
                                })
                            }
                        </tbody>
                </table>
            </div>
        </>
    )
}
export default State;