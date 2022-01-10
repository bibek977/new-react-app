import React from 'react'
import ReactDOM from 'react-dom'

const timeNow = new Date().toLocaleTimeString()

ReactDOM.render(
    <>
    <h1 contentEditable="true">Time : {timeNow} </h1>
    </>,
 
    document.getElementById('root')
)