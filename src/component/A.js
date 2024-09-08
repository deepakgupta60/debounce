import { useEffect } from "react";

const A=({getData})=>{
    
   async function getUserData(){
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        // console.log(data)
        getData(data)
    }
    useEffect(()=>{
        getUserData()
    },[])

    return(
        <>

        </>
    )
}
export default A;

// const A =({getData})=>{
//     const val=12;
    
//     getData(val,"Hello world")
//     return(<>
//         <h1>Hello A</h1>
//     </>)
// }

// export default A;