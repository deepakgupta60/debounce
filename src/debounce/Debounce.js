import { useEffect, useState } from "react";

const Debounce =()=>{
    const [val, setVal]=useState("");
    const [data, setData]=useState([]);
    const fetchData=async()=>{
      let res={};
        if(val)
      {
        try{
            res = await fetch(`https://content-xflix-backend.azurewebsites.net/v1/videos?title=${val}`);
            // const resData = await response.json();
            // setData(resData.videos)
            // console.log(data)

        }catch(err)
        {
            console.log(err)
        }
      }
      else{
            res = await fetch(`https://content-xflix-backend.azurewebsites.net/v1/videos`);
            // const resData = await response.json();
            // setData(resData.videos)
      }
      const responseVal = await res.json();
      setData(responseVal.videos);
    }

    const handleChange=(e)=>{
            setVal(e.target.value)
    }
    useEffect(()=>{
        fetchData()
    },[val])

    console.log(data)
    return(
        <>
        <input onChange={handleChange} value={val} placeholder="enter a search movie" />
        <div>
            {
            data.length?
            data.map((item)=>{
                return (<p key={item.id}>{item.title}</p>) 
            }):<p>No movie found</p>
        
        }
        </div>
        </>
    )
}

export default Debounce;