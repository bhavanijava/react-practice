const Child1=(props)=>{
    return(
        <>
            <h1>{props.str}</h1>
            <h1>{props.num}</h1>
            <h1>{JSON.stringify(props.bool)}</h1>
            {
                props.arr.map((element,index)=>{
                    return(
                        <>
                            <h1 key={element}>{element}...{index}</h1>
                        </>
                    )
                })
            }
            <h1>{props.obj.key1}...{props.obj.key2}</h1>

                        
                        <table> 
                            <tr>
                               <th>id</th>
                               <th>pid</th>
                                <th>pname</th>
                                <th>pcost</th>
                            </tr> 
                          {
                          
                          props.employees.map(

                                    (element)=>{

                                            return(
                                                <h1>
                                                    {element.id}
                                                </h1>
                                            )
                                    }


                          )
                          
                          
                          }
                            
                        </table>  


            <h1>{props.children}</h1>
        </>
    )
}
export default Child1;