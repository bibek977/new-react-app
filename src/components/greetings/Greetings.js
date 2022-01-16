import React from 'react'

export default function Greetings() {

// const timeNow = new Date(2022, 1, 10, 14)
const timeNow = new Date()
const hour = timeNow.getHours()
let greet = ''
let myStyle = ''
const center = {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center'
}
if(hour>=0 && hour <12){
     greet = 'morning'
     myStyle = {
         color : 'red'
     }
}
else if (hour>=12 && hour <18){
    greet = "afternoon"
    myStyle = {
        color : 'blue'
    }
}
else{
    greet = 'evening'
    myStyle = {
        color : 'green'
    }
}
    return (
        <div>
             <h1 style={center}>Good, <span style={myStyle}> {greet} </span></h1>
        </div>
    )
}
