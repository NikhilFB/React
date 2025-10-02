import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx"
import data from "../data.js";

export default function App(){
  let dataItems = data.map((item) => {
    return(
      <Card
      {...item} />
    )
  })
  return (
    <div>
      <Navbar />
      <div className = "dataItems">
        {dataItems}

      </div>
    
    </div>
  )
}