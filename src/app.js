import React from "react";
import ReactDom from "react-dom/client"
import Todo from "./components/Todo";

const Body=()=>{
    return(
        
        <Todo></Todo>
    
        
    )
}


const root=ReactDom.createRoot(document.getElementById("main"))
root.render(<Body></Body>)


