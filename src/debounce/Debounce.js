import { useEffect, useState } from "react";

const Debounce = () => {
    const [val, setVal] = useState("");
    const [data, setData] = useState([]);
    // const [timerId, setTimerId] = useState(0);

    const fetchData = async () => {
        try {
            let res = {};
            if (val) {
                res = await fetch(`https://content-xflix-backend.azurewebsites.net/v1/videos?title=${val}`);
                // const resData = await response.json();
                // setData(resData.videos)
                // console.log(data)
            }
            else {
                res = await fetch(`https://content-xflix-backend.azurewebsites.net/v1/videos`);
                // const resData = await response.json();
                // setData(resData.videos)
            }
            const responseVal = await res.json();
            setData(responseVal.videos);

        } catch (err) {
            console.log("Error", err);
        }


       }
       const debouncFn = (fn, delay) => {
        let timerId;
        return (function (...args) {
            if (timerId) {
                clearTimeout(timerId)
            }
            timerId = setTimeout(() => {
                fn(...args)
            }, delay);
        }
         
    )
}

const handleChange = debouncFn((e) => {
    setVal(e.target.value)
}, 1000);

// const debounceHandleChange=debouncFn(handleChange,1000)


useEffect(() => {
    fetchData()
}, [val])

console.log(data)
return (
    <>
        <input value={val} onChange={handleChange} placeholder="search a value" />
        {/* <input onChange={debounceHandleChange} value={val} placeholder="enter a search movie" /> */}
        <div>
            {
                data.length ?
                    data.map((item) => {
                        return (<p key={item.id}>{item.title}</p>)
                    }) : <p>No movie found</p>

            }
        </div>
    </>
)
}

export default Debounce;



// call bind apply means?