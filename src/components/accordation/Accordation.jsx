import React, { useState } from 'react'
import MyAccordation from './MyAccordation'
import {Interview} from './accApi'
import '../sass/accordation/accordation.css'

export default function Accordation() {
    const [data, setdata] = useState(Interview)
    return (
        <div className='accordation-main'>
            {
                data.map((curValue)=>{
                    const {id} = curValue
                    return <MyAccordation key={id} {...curValue} />
                })
            }
        </div>
    )
}

