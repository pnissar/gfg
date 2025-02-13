import React from 'react'
import { imgs } from "../assets/assets.js"
import { useNavigate } from 'react-router-dom';
import Card from './Card.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
export default function Cards() {
   
    const nav =useNavigate()
  return (
    <div
      className=" d-flex overflow-scroll mt-5 container-fluid h-75 gap-5 p-3 ps-5 align-items-center  "
      style={{ scrollbarWidth: "none" }}
    >
      {imgs.map((it) => (
        <div
          className={` h-75 p-2 w-auto text-light d-flex flex-column justify-content-center   rounded-1  `}
          style={{
            backgroundColor: "#3A6D8C",
            boxShadow: "-20px -20px 40px rgba(0, 0, 0, 0.4)",
          }}
        >
          <img
            src={it.img}
            onClick={() => nav(`View`, { state: { item: it } })}
            className="my-4 rounded rounded-1 h-75"
          />
          <h4 style={{ wordBreak: "keep-all", whiteSpace: "nowrap",fontWeight:"700",fontSize:"1.7rem" }}>
            {it.tittle}
          </h4>
        </div>
      ))}
    </div>
  );
}
