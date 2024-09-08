import { useEffect } from "react";

const B=({getComment})=>{
    
    async function fetchCommentData()
    {
        let response = await fetch('https://jsonplaceholder.typicode.com/comments');
        let data = await response.json();
        getComment(data)
        // console.log(data,"test")
    }
    useEffect(()=>{
        fetchCommentData()
    },[])
    return(<>

    </>)
}
export default B;
// const B=({val,text})=>{
//     return(
//         <>
//         <p>{text} A: {val}</p>
//         </>
//     )
// }

// export default B;