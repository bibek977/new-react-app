import React,{useState} from 'react'
import '../sass/event/event.css'

export default function Event() {

    const [myStyle1, setmyStyle1] = useState({
        backgroundColor : 'white'
    })
    
    const clickEvent=()=>{
        setmyStyle1({
            backgroundColor : 'blue'
        })
    }

    const doubleClickEvent = ()=>{
        setmyStyle1({
            backgroundColor : 'green'
        })
    }

    const mouseOver=()=>{
        setmyStyle1({
            width : '9rem',
            height : '7rem'
        })
    }
    const mouseOut = ()=>{
        setmyStyle1({
            color : 'maroon'
        })
    }

    return (
        <div className='events'>
            <button style={myStyle1} onClick={clickEvent} onDoubleClick={doubleClickEvent} onMouseOut={mouseOut} onMouseOver={mouseOver} >onClick</button>
        </div>
    )
}
