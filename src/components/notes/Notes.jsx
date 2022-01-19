import React,{useState} from 'react'
import Content from './Content'

export default function Notes(props) {
    const [expand,setexpand]=useState(false)
    const [data, setdata] = useState({
        title : '',
        content : ''
    })

        const [init, setinit] = useState([])


    const Inputdata = (event)=>{
        // event.preventDefault()

        const {name,value} = event.target
        setdata((prevalue)=>{
            return {
                ...prevalue,
                [name] : value
            }
        })
        console.log(data)
    }
    const showOutput = (setdata)=>{
    setinit((prevalue)=>{
                return [...prevalue, data]
            })
    }

    const ItemDelete=(id)=>{
        
        setinit((oldData)=>
        oldData.filter((curEle,index)=>{
            return index !== id
        }))
    }
    const expandIt = ()=>{
        setexpand(true)
    }
    return (
        <div className='note-main'>
            {
                expand ?
            <h1><input type="text" name='title' value={data.value} onChange={Inputdata} placeholder='Add Title...' /></h1>
                : null
        }
            <p><textarea name="content" id="" cols="30" rows="10" value={data.content} onClick={expandIt} onChange={Inputdata} placeholder='Add Description...' ></textarea></p>
            <button onClick={showOutput}>Show</button>

            <div className="note-container">

              {
                  init.map((e,i)=>{
                      return <Content id={i} key = {i} titles = {e.title} contents={e.content} itemDelete={ItemDelete} />
                    })
                }
           
                </div>
        </div>
    )
}
