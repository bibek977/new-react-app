import React, { useState } from 'react'
// import ToDolist from './ToDolists'
import '../sass/todolist/todolist.css'
import AddIcon from '@mui/icons-material/Add'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

// const getLocalItems = ()=>{
//     let getList = localStorage.getItem('getList')
//     console.log(getlist)

//     if(getlist){
//         return JSON.parse(localStorage.getItem('getList'))
//     }
//     else {
//         return []
//     }
// }

export default function Todolist() {
    const [init, setinit] = useState('')
    const [list, setlist] = useState([]);
    const [toggle, settoggle] = useState(true);
    const [clicked, setclicked] = useState(null);
   
    const addList = ()=>{
        if(!init){

        }
        else if(init && !toggle){
           setlist(
               list.map((ele)=>{
                   if(ele.id===clicked){
                       return {...ele, name : init}
                   }
                   return ele
               })
           )
           settoggle(true)
           setinit('')
           setclicked(null)
        }
        else{
            const newList = {id : new Date().getTime().toString(), name : init}
            setlist([newList,...list])
            setinit('')
        }
    }

    const deleteItem =(i)=>{
        const afterDelete = list.filter((ele)=>{
            return i !== ele.id
        })
            setlist(afterDelete)
    }

    const deleteAll = ()=>{
        setlist([])
    }

    const editList =(i)=>{
        const afterEdit = list.find((ele)=>{
            return ele.id === i
        })
        settoggle(false)
        setinit(afterEdit.name)
        setclicked(i)
    }

    return (
        <div className='todolist'>
            <div className="todo-center">
                <h1>To do List</h1>
                <input type="text" placeholder='Add Items...' onChange={(e)=>setinit(e.target.value)} value={init}/> 
                {toggle ?
                <button onClick={addList}><span><AddIcon/> </span></button>
                : <EditIcon  onClick={addList} />
                }
                <ul>
                    {list.map((e)=>{
                        return(
                            <li key={e.id} style={{display : 'flex', justifyContent : 'space-around', border : '2px solid black', backgroundColor : 'whitesmoke', margin : '10px', borderRadius : '1rem', alignItems : 'center'}} >
                                <EditIcon onClick={()=>editList(e.id)} />
                                <DeleteForeverIcon onClick={()=>deleteItem(e.id)} />
                            {e.name}
                            </li>
                        )
                    })}
              <DeleteForeverIcon onClick={deleteAll} />
                </ul>

            </div>
            
        </div>
    )
}
