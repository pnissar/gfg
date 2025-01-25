import React from "react"
import Header from "../utilites/Header.jsx"
import Cards from "../utilites/Cards.jsx"
import { data } from "../assets/assets.js"
import "bootstrap/dist/css/bootstrap.min.css";
export default function Lp() {
    return (
      <div className={` d-flex flex-column  p-2  `} style={{height: "100%"}}>
        
        <Header />
        <Cards />
      </div>
    )
}
