import React from 'react'
import { useState } from 'react/cjs/react.development'
import '../sass/form/form.css'

export default function Form() {
    const [initText, finalText]= useState()
    const [myName, fullName]=useState()
    
    const inputText=(event)=>{
        finalText(event.target.value)
    }
    const onSubmit=()=>{
        fullName(initText)
    }
    return (
        <div className='form'>
            <h1>hello {myName}</h1>
            <input type="text"  onChange={inputText} value={initText}/>
            <button onClick={onSubmit}>Click Me</button>
        </div>
    )
}
