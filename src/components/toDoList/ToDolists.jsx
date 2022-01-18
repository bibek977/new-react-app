import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function ToDolist(props) {
    return (
        <>
            <li><DeleteForeverIcon onClick={()=>{
                props.remove(props.id)}}
             className="fas fa-times-circle"></DeleteForeverIcon> {props.itemLists}</li>
        </>
    )
}
