import React, { useContext } from 'react';
import ContextC from './ContextC'
import {Fname,Lname} from './Context'

export default function ContextB() {
    const firstName = useContext(Fname)
    const lastName = useContext(Lname)
  return <div className='context-b'>
      <ContextC />
      <h1>Hello, {lastName} {firstName}</h1>
  </div>;
}
