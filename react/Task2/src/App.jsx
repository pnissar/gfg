import React from 'react'
import { createContext } from 'react';
import C1 from "./C1"
export const Context = createContext();
export default function App() {
  const obj = {
    name: "Nissar",
    age:"29"
  }
  return (
    <div>
      <Context.Provider value={obj}>
        <C1 />
      </Context.Provider>
    </div>
  );
}
