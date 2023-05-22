const Child=(props)=>{
    return(
        <>
            <h1>{props.key1}</h1>
            <h1>{props.key2}</h1>
            <h1>{JSON.stringify(props.key3)}</h1>
            {
                props.key4.map((element,index)=>{
                    return(
                        <>
                            <h1 key="element">{element}...{index}</h1>
                        </>
                    )
                })
            }

            <h1>{props.key5.key1}...{props.key5.key2}</h1>

            <table border={1}
                    align={"center"}
                    cellSpacing={10}
                    cellPadding={10}>
                        <thead>
                            <tr>
                               <th>id</th>
                               <th>pid</th>
                                <th>pname</th>
                                <th>pcost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.key6.map((element,index)=>{
                                    return(
                                     <tr key={element.id}>
                                        <td>{element.id}</td>
                                        <td>{element.pid}</td>
                                        <td>{element.pname}</td>
                                        <td>{element.pcost}</td>

                                     </tr>
                                    )
                                })
                            }
                        </tbody>

            </table>
        </>
    )
}
export default Child;