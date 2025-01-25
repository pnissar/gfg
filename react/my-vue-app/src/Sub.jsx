import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Sub() {
  const params = useParams();
  const { ti } = params;
  console.log(params);
  return <h1>Carrer {ti}</h1>;
}
