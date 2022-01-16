import React, {useState} from 'react'
import Greetings from './components/greetings/Greetings'
// import Calculator from './components/greetings/Calculator'
import Cards from './components/movies/Card'
import Increment from './components/hooks/Increment'
import './components/sass/navbar.css'

export default function Show() {
    const [state, setstate] = useState()

    const Button =()=>{
        return (
            <div className='navbar'>
                <ul>
                
                <button onClick={greetShow}>Greetings</button>
            <button onClick={moviesShow}>Movies</button>
            <button onClick={incrementShow}>Increment</button>
                </ul>
            
            </div>
        )
    }
    const greetShow=()=>{
        setstate(<Greetings></Greetings> )
    }
    const moviesShow=()=>{
        setstate(<Cards/>)
    }
    const incrementShow=()=>{
        setstate(<Increment />)
    }
    return (<>
    <Button></Button>
    {state}
    </>
    )
}

