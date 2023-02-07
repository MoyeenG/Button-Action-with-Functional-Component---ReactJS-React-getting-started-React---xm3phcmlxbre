import React, {Component, useState} from "react";
import "./../styles/App.css";


let paraId = "para";

function ParaDisplay() {
  
  return (
    <p id={ paraId }>Hello, 
      I've learnt to use the full-stack evaluation tool. 
      This makes me so happy
    </p>  
  );
}


function App() {
  const [text,setText] = useState(); 
  return (
    <div id="main">
      <button id="click" onClick={() =>setText(ParaDisplay) }>Click Me!</button>
      {/* <ParaDisplay /> */}
      {text}
    </div>
  );
}


export default App;
