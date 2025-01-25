import React, { lazy } from 'react'
const Ch4 = lazy(() => import("./Ch4"));

export default function App2() {
  return (
      <div>
          <h1>Hello world</h1>

              <Ch4/>
          
    </div>
  )
}
