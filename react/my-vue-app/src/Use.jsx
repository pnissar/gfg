import React, { useEffect, useState } from 'react'

export default function Use() {
    const [n, sn] = useState(0);
    useEffect(() => {
        sn(n + 1);   
    },
        [])
    console.log(n);
  return (
      <div>{ n}</div>
  )
}
