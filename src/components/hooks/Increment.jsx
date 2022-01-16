import React,{useState} from 'react'

export default function Increment() {
    const [count, setcount] = useState(0)
    const IncNum = ()=>{
        setcount(count + 1)
        // console.log('clicked' , count++)
    }
    const ResetNum = ()=>{
        setcount(0)
    }
    const IncNumFive=()=>{
        setcount(count + 5)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={IncNum}>Click Me</button>
            <button onClick={IncNumFive}>Increase 5</button>
            <button onClick={ResetNum}>Reset</button>
        </div>
    )
}
