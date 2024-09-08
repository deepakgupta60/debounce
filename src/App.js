import { useState } from "react";
import A from "./component/A";
import B from "./component/B";
import C from "./component/C";

const App =()=>{
  const [userData, setUserData]=useState([]);
  const [commentData, setCommentData]=useState([]);
  
  function getData(data)
  {
    setUserData(data)
  }

  function getComment(data)
  {
    setCommentData(data)
  }
  // console.log(userData,"app")
  return(<>
    <A getData={getData}/>
    <B getComment={getComment}/>
    <C userData={userData} commentData={commentData}/>
  </>)
}
export default App;













// // import logo from './logo.svg';
// // import './App.css';

// import { useState } from "react";
// import A from "./component/A";
// import B from "./component/B";

// function App() {

//   const [val, setval]=useState(0);
//   const [text, settext]=useState("");
//   const getData = (valueA,text)=>{
//     setval(valueA)
//     settext(text)
//   }

//   return (
//     <div className="App">
//       <A getData={getData}/>
//       <B val={val} text={text}/>
//     </div>
//   );
// }

// export default App;
