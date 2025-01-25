import React, { useState } from "react";
export default function Ap() {
  // const [name, setName] = useState("");
  // console.log(name);
  // const [v, settog] = useState(true);

  // const hanClick = (f,v) => {
  //   if (v==true) {
  //     setName("Nissar");
  //   } else {
  //     setName("Nithya")
  //   }
  // };
  
  // return (
  //   <div>
  //     <Ch2 t={name} />
  //     <button onClick={() => hanClick(settog(!v),v)}>Click Me</button>
  //   </div>
  // );
  const [n, sn] = useState("hello");
  const h = () => {
    console.log(n);
    sn("");
  }
  return(
    <div>
      <h1>{n}</h1>
      <input type="text" onChange={(event) => sn(event.target.value)} value={n} />
      <button onClick={h}>Click-me</button>
    </div>
  )




}
