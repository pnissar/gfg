import React from "react";
import { useParams } from "react-router-dom";
import Header from "../utilites/Header";
import {data } from "../assets/assets.js"
export default function About() {
 
  return (
    <div>
      <div className={`p-2`}>
        <br />
        <Header />
        <div className="container mt-5">
          <h5>{data.about}</h5>
        </div>
      </div>
    </div>
  );
}
