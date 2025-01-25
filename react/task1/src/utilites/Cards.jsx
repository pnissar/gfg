import React from 'react'
import { imgs } from "../assets/assets.js"
import { useNavigate } from 'react-router-dom';
import Card from './Card.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
export default function Cards() {
    console.log(imgs);
    imgs.map((it) => console.log(it.img));
    const nav =useNavigate()
  return (
    <div
      className=" d-flex overflow-scroll mt-5 container"
      style={{
        height: "50%",
        scrollbarWidth: "none",
        backgroundImage: "linear-gradient( 110.3deg,  rgba(72,85,99,1) 8.8%, rgba(127,146,166,1) 95.1% )",
      }}
    >
      {imgs.map((it) => (
        <div className={` h-100 p-4 w-auto text-light ${it}`}>
          <img
            src={it.img}
            onClick={() => nav(`View`, { state: { item: it } })}
            className="my-4 rounded rounded-1 h-75"
          />
          <h4 style={{wordBreak:"keep-all",whiteSpace:"nowrap"}}>{it.tittle}</h4>
        </div>
      ))}
    </div>
  );
}
