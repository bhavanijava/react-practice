import Comp2 from "./Comp2";
const Comp1=()=>{
    return(
        <>
            <div className="container mt-5">
                <Comp2></Comp2>
                 <hr></hr>
                 <h1 className="text text-info">Welcome to Parent Component</h1>
                 <h1 className="text text-primary">Welcome to Comp2 Component</h1>
            </div>
        </>
    )
}
export default Comp1;