import React from 'react'

export default function Content(props) {
    const deleteItem=()=>{
        props.itemDelete(props.id)
    }
    return (
        <div className='notes'>
            <h1>{props.titles}</h1>
            <p>{props.contents}</p>
            <button onClick={deleteItem}>Delete</button>
        </div>
    )
}
