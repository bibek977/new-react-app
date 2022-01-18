import React from 'react'

export default function ToDolist(props) {
    return (
        <>
            <li><i onClick={()=>{
                props.remove(props.id)}}
             className="fas fa-times-circle"></i> {props.itemLists}</li>
        </>
    )
}
