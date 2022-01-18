import React, { useState } from 'react'
import ToDolist from './ToDolists'
import '../sass/todolist/todolist.css'

export default function Todolist() {
    const [initValue,finalValue]= useState()
    const [items, setitems] = useState([])

    const inputValue = (event)=>{
        finalValue(event.target.value)
    }
    const showList= ()=>{
        setitems((preValue)=>{
            return [initValue, ...preValue ]
        })
        finalValue('')
    }
    const deleteItems=(id)=>{
        setitems((preValue)=>{
            return preValue.filter((ele,ind)=>{
                return ind !==id
            })
        })
    }
    return (
        <div className='todolist'>
            <div className="todo-center">
                <h1>To do List</h1>
                <input type="text" placeholder='Add Items...' onChange={inputValue} value={initValue}/> 
                <button onClick={showList}><span>+</span></button>
                <ul>
                {items.map((itemval,index)=>{
                        return <ToDolist 
                        id = {index}
                        key = {index}
                        itemLists = {itemval} 
                        remove ={deleteItems}
                        />
                    })}
                </ul>
            </div>
            
        </div>
    )
}
