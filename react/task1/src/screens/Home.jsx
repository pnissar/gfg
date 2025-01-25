import React from 'react'
import { useParams } from 'react-router-dom'

export default function Home() {

  const { tittle } = useParams();
  console.log(tittle);
  const d = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const dd = {
    width: "70%",
    height: "60%",
    padding: "5%",
    borderRadius: "20px",
    boxShadow: "1px 2px 25px black",
    fontSize: "1.2rem",
  };
  return (
    <div style={d}>
      <div style={dd}>
        <h1>{tittle}</h1>
      </div>
    </div>
  );
}
