import React, { useContext } from 'react'
import { Context  } from './App'

export default function C2() {
    const n = useContext(Context);
    console.log(n);
  return (
      <div>C2{n.name}</div>
  )
}
