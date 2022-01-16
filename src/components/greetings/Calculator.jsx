import React from 'react'

export default function Calculator() {
    const add=(a,b)=>{
        return a+b
    }
    const mul=(a,b)=>{
        return a*b
    }
    const sub=(a,b)=>{
        return a-b
    }
    const div=(a,b)=>{
        return (a/b).toFixed(2)
    }
    return (
        <div>
            <h1>Calculator</h1>
            <h1>Addition is : {add(4,7)}</h1>
            <h1>Multiplication is : {mul(4,7)}</h1>
            <h1>Subtraction is : {sub(4,7)}</h1>
            <h1>Division is : {div(4,7)}</h1>
        </div>
    )
}
