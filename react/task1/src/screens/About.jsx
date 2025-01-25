import React from "react";
import { useParams } from "react-router-dom";
import Header from "../utilites/Header";
import {data } from "../assets/assets.js"
export default function About() {
 
  return (
    <div >
      <div className={`container`}>
        <Header />
        <h5>{data.about}</h5>
      </div>
    </div>
  );
}
