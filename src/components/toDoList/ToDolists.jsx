import React, { useState } from 'react';
import '../sass/todolist/todolist.css'
import AddIcon from '@mui/icons-material/Add'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

export default function ToDolists() {
    const [inputValue, setinputValue] = useState('');
    const [toggle, settoggle] = useState(true);
    const [lists, setlists] = useState([]);
    const [clickedId, setclickedId] = useState(null);

    const addItem=()=>{
        if(!inputValue){

        }
        else if(inputValue && !toggle){
            setlists(
                lists.map((e)=>{
                    if(e.id===clickedId){
                        return {...e, name: inputValue}
                    }
                    return e
                })
                )
                settoggle(true)
                setclickedId('')
                setinputValue('')
        }
        else{
            const getlist={id : new Date().getTime().toString(), name : inputValue}
            setlists([...lists, getlist])
            setinputValue('')
        }
    }

    const editItem = (i)=>{
        const afterEdit= lists.find((e)=>{
            return i === e.id
        })
        setclickedId(i)
        settoggle(false)
        setinputValue(afterEdit.name)
    }

    const deleteItem=(i)=>{
        const afterDelete= lists.filter((e)=>{
            return i !== e.id
        })
        setlists(afterDelete)
    }
  return (
    <div className='todolist'>
    <div className="todo-center">
        <h1>To do List</h1>
        <input type="text" onChange={(e)=>setinputValue(e.target.value)} value={inputValue} />
        {toggle?
        <button onClick={addItem}><AddIcon/></button>:
        <button onClick={addItem}><EditIcon/></button>
        }

        <ul>
            {lists.map((e)=>{
                return(

                    <li key={e.id} style={{display : 'flex', justifyContent : 'space-around', border : '2px solid black', backgroundColor : 'whitesmoke', margin : '10px', borderRadius : '1rem', alignItems : 'center'}} >
                    <EditIcon onClick={()=>editItem(e.id)}/>
                    <DeleteForeverIcon onClick={()=>deleteItem(e.id)}/>
                    {e.name}
                    </li>
            )
            })}
        </ul>
        </div>
        </div>
    )
}
