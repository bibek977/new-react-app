import React,{useState} from 'react'

export default function MyAccordation({ques,ans}) {
    const [sign, setsign] = useState(false)
    return (
        <div className="accordation-container">

        <div className='accord-sign'>
            <h1><span onClick={()=>setsign(!sign)}> {sign ? "-" : "+"} </span> {ques}</h1>
            
            {sign && <p>{ans}</p>}
        </div>
        </div>
    )
}

