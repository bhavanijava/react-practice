import {useState,useEffect} from "react";
import axios from "axios";
import "./Get1.css"

const Get1=()=>{
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        axios.get("https://www.w3schools.com/angular/customers.php")
        .then((posRes)=>{
            console.log(posRes);
            const {data}=posRes;
            console.log(data);
           const {records}=data;
           console.log(records)

            setArr(records);
        },(errRes)=>{
            console.log(errRes);
        })
    },[]);
    return(
        <>
            <div className="container mt-5">
            {
                arr.length==0?(<div className="spinner">
                    <div className="fa fa-spinner fa-spin"></div>
                    </div>)
                    :(
                    <table border={2}
                            align={"center"}
                            cellPadding={10}
                            cellSpacing={10}>
                                <tr>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>Country</th>
                                </tr>
                                {
                                    arr.map((element,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{element.Name}</td>
                                                <td>{element.City}</td>
                                                <td>{element.Country}</td>
                                            </tr>
                                        )
                                    })
                                }

                    </table>
                )
            }
            </div>
        </>
    )

}
export default Get1;