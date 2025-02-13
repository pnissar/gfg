import React from "react";
import { useParams } from "react-router-dom";
import Header from "../utilites/Header";
import { data } from "../assets/assets.js";

export default function Contact() {
   
  return (
    <div className="p-2">
      <br />
      <Header />
      <div className="container mt-5"><h1>Contact Me:</h1>
        <h5>{ data.phone}</h5></div>
    </div>
  );
}
