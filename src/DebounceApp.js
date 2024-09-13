import { Fragment, useEffect, useState } from "react";
// import "./styles.css";

// https://content-xflix-backend.azurewebsites.net/v1/videos?title=top

export default function DebounceApp() {
  const [val, setVal] = useState("");
  const [videoData, setVideoData]=useState([])
  const [timerId, setTimerId]=useState(0);
  
  const fetchVideso = async () => {
    
    try{

      let res={};

      if(val)
      {
        res=await fetch(
        `https://content-xflix-backend.azurewebsites.net/v1/videos?title=${val}`);

      }
      else
      {
        res=await fetch(
          `https://content-xflix-backend.azurewebsites.net/v1/videos`);
      }
      let responseVal = await res.json();
      console.log(responseVal.videos)
      setVideoData(responseVal.videos);
      
    }catch(err)
    {
      console.log(err)
    }
   
    // console.log(data.videos);
  };

  useEffect(() => {
    // debounceFn(fetch,1000);
    fetchVideso();
  }, [val]);

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const debounceFn=(fn, delay=500)=>{
    return function(e){
      if(timerId)
      {
        clearTimeout(timerId)
      }  

      
      const newTimerId = setTimeout(() => {
        console.logg(fn())
        fn(e);
      }, delay);
      console.log({timerId, newTimerId});
      setTimerId(newTimerId)
    }
  }

  const debounceHandleChange = debounceFn((e) => {
    setVal(e.target.value);
  },1000)

  return (
    <div className="App" style={{width:"100vh", height:"100vh", margin:"20px", textAlign:"center"}}>

      <input onChange={debounceHandleChange} value={val} />

      {
        videoData.map((item)=>{
          return (<Fragment key={item.id}>
            {
             <div>{item.title}</div> 
            }
          </Fragment>)
        })
      }
    </div> 
  );
}
// cleartimout means to clear the data, settimeout behaviour..>> when delete timer delete then entire settimeout is gone..

// Build a Stopwatch in react
// Build a stopwatch in javascript.

// useEffect() 

// if everybody is busy to calling api means bombarding..


// browser stack > good product startup > debug the code.
// 


// call bind apply in react

// https://medium.com/@rabailzaheer/exploring-call-apply-and-bind-methods-in-javascript-6023627c7bdc#:~:text=call%20%3A%20The%20call%20method%20immediately,t%20immediately%20invoke%20the%20function.



// Amazone using debouncing..
// I wanted,  
// just a technique > to improve search functionality..


// you go for result.. govt. server down, 

// jo kaam sui se ho sakta hai, uske liye talwar ki kya jrurat


// how to build a flipkart / amazong like thing using 
// when coming load on it, then use a traffic like a 
 


