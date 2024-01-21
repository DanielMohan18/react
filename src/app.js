import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Header";
import Bodycom from "./components/Bodycom";

const Applayout = () => {
    return (
       <div className="app">
        <Heading /> 
        <Bodycom />  
       </div>
    );
};

const root=ReactDOM.createRoot(document.getElementById("hell"));
root.render(<Applayout />);