import React, { useEffect, useState } from "react";

export default function Input({ add, delAll }) {
  const [v, sv] = useState("");
  const handleadd = () => {
    if (v.trim()) {
      add(v);
      sv("");
    }
  };

  console.log(v);
  return (
    <div>
      <input type="text" onChange={(e) => sv(e.target.value)} value={v} />
      <button onClick={() => handleadd()}>ADD</button>
      <button onClick={() => delAll()}>DEL</button>
    </div>
  );
}
