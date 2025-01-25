import React, { useState } from 'react'
import Ac1 from "./Ac1"

export default function App1() {
    const [n, sn] = useState("");
  return (
      <div><h1>{n}</h1>
          <Ac1 sn={sn} />
      </div>
  )
}
