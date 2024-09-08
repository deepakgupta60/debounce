// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import A from "./component/A";
import B from "./component/B";

function App() {

  const [val, setval]=useState(0);
  const [text, settext]=useState("");
  const getData = (valueA,text)=>{
    setval(valueA)
    settext(text)
  }

  return (
    <div className="App">
      <A getData={getData}/>
      <B val={val} text={text}/>
    </div>
  );
}

export default App;
