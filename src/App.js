import React from "react";

// link index.js file to css 
import "./style.css"
// import button
import Button from "./Button"


 const App = () =>{
    return(
        <div>
    <h1>HEllo World !!</h1>
    <h2>hello world </h2> 
    <Button title="app store"></Button>
    <Button title="play store"></Button>
    <Button title="apple store"></Button>
    {/* <Button btn="hello"></Button> //example */}

    </div>
    ) ;
    
}


export default App;