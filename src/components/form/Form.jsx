import React,{useState} from 'react'
import '../sass/form/form.css'

export default function Form() {

    const [fullId, setfullId] = useState('')
    const [fullPw, setfullPw] = useState('')
    const [initText, setinitText] = useState( ()=>{
        return{
            id : '',
            pw : '' 
        }
    } )
    const inputEvent=(event)=>{
        const user = event.target.value
        const userName = event.target.name
        setinitText((preValue)=>{

                if(userName==='id'){
                    return{

                        id : user,
                        pw : preValue.pw
                    }
                } 
                else if (userName === 'pw'){
                    return{

                        id : preValue.id,
                        pw : user
                    }
                }
                
        })
    }
    const result=(event)=>{
        event.preventDefault()
        setfullId(initText.id)
        setfullPw(initText.pw)
    }
    return (
        <div className='form' onSubmit={result}>
            <form >
                <h1>Id : {fullId}</h1>
                <h1>Pw : {fullPw}</h1>
                <input type="text" name="id" onChange={inputEvent} value = {initText.id}/>
                <input type="password" name="pw" onChange={inputEvent} value={initText.pw}/>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
