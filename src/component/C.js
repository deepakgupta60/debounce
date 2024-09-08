const C=({userData, commentData})=>{
    return(
        <>
        {userData.map((data)=>{
            return <p key={data.id}>{data.name}</p>
        })}

<h1>Comment Data</h1>
        {commentData.map((data)=>{
            return <p key={data.id}>{data.name}</p>
        })}
        </>
    )
}
export default C;