import React,{useEffect, useState} from 'react'
import "../sass/Inc/inc.css"

export default function Increment() {
    const [count, setcount] = useState(0)
    const [counts, setcounts] = useState(0)
    const IncNum = ()=>{
        setcount(count + 1)
        // console.log('clicked' , count++)
    }
    const ResetNum = ()=>{
        setcount(0)
    }
    const DecNum=()=>{
        if (count > 0){
        setcount(count - 1)
        }
        else {
            setcount(0)
        }
    }
    useEffect(()=>{
        return(
            // alert('hello')
            document.title=`${counts}`
        )
    },[counts])
    return (
        <div className='inc'>
            <div className="center-inc">

            <h1>{count}</h1>
            <button onClick={IncNum}>Increase</button>
            <button onClick={DecNum}>Decrease</button>
            <button onClick={ResetNum}>Reset </button>
            <button onClick={()=>{
                return setcounts(counts+5)
            }}>{counts}</button>

            </div>

        </div>
    )
}
