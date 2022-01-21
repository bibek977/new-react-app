import React, { createContext } from 'react';
import ContextA from './ContextA';

const Fname = createContext("bibek")
const Lname = createContext("bhattarai")

export default function Context() {
  return (
  <div>
      {/* <Fname.Provider value={"Bibek"}> */}
      {/* <Lname.Provider value={"Bhattarai"}> */}
      <ContextA />
      {/* </Lname.Provider> */}
      {/* </Fname.Provider> */}
  </div>)
}

export {Fname, Lname}
