import React from "react";

export default function Ch3(props) {
  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "start",
        }}
      >
        <h3>{props.t.name}</h3>
        <h3>{props.t.batch}</h3>
        <h3>{props.t.course}</h3>
        <h3>{props.t.phone}</h3>
        <h3>{props.t.roll}</h3>
      </div>
    </div>
  );
}
