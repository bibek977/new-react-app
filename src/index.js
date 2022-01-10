import React from 'react'
import ReactDOM from 'react-dom'

const timeNow = new Date(2022, 1, 10, 14)
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
ReactDOM.render(
    <>
    <h1 style={center}>Good, <span style={myStyle}> {greet} </span></h1>
    </>,
 
    document.getElementById('root')
)