import React, {useState} from 'react'
// import Greetings from './components/greetings/Greetings'
// import Calculator from './components/greetings/Calculator'
import Cards from './components/movies/Card'
// import Increment from './components/hooks/Increment'
// import Event from './components/events/Event'
// import Form from './components/form/Form'
import Todolist from './components/toDoList/Todolist'
import Accordation from './components/accordation/Accordation'
import Note from './components/notes/Note'
import './components/sass/navbar/navbar.css'

export default function Show() {
    const [state, setstate] = useState()

    const Button =()=>{
        return (
            <div className='navbar'>
                <ul>
                
                {/* <button onClick={greetShow}>Greetings</button> */}
            <button onClick={moviesShow}>Movies</button>
            {/* <button onClick={incrementShow}>Increment</button> */}
            {/* <button onClick={eventShow}>Events</button> */}
            {/* <button onClick={formShow}>Form</button> */}
            <button onClick={listShow}>Todo-List</button>
            <button onClick={accordShow}>Accordation</button>
            <button onClick={noteShow}>Note</button>
            
                </ul>
            
            </div>
        )
    }
    // const greetShow=()=>{
    //     setstate(<Greetings></Greetings> )
    // }
    const moviesShow=()=>{
        setstate(<Cards/>)
    }
    // const incrementShow=()=>{
    //     setstate(<Increment />)
    // }
    // const eventShow=()=>{
    //     setstate(<Event />)
    // }
    // const formShow=()=>{
    //     setstate(<Form />)
    // }
    const listShow=()=>{
        setstate(<Todolist />)
    }
    const accordShow=()=>{
        setstate(<Accordation />)
    }
    const noteShow=()=>{
        setstate(<Note />)
    }

    return (<>
    <Button></Button>
    {state}
    </>
    )
}

