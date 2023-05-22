import Child from "./Child";
const Parent=()=>{
    return(
        <>
            <Child
                key1={`Reactjs`}
                key2={100}
                key3={true}
                key4={[10,20,30,40,50]}
                key5={{key1:`ReactJS`,key2:`NodeJS`}}
                key6={
                    [
                    {id:1,pid:111,pname:`p_one`,pcost:1000},
                    {id:2,pid:222,pname:`p_two`,pcost:2000},
                    {id:3,pid:333,pname:`p_three`,pcost:3000},
                    {id:4,pid:444,pname:`p_four`,pcost:4000},
                    {id:5,pid:555,pname:`p_five`,pcost:5000}
                ]
            }>

            </Child>
        </>
    )
}
export default Parent;