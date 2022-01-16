import React from 'react'
import fullNameOnly, {myName, fName} from './Name'
// import * as Names from './Name'


const Heading = ()=>{
    return (
        <>

        {/* <h1>{Names.default}</h1>
        <h1>{Names.myName}</h1>
        <h1>{Names.fName()}</h1> */}
        
        <h1>{fullNameOnly}</h1>
        <h1>{myName}</h1>
        <h1>{fName()}</h1>
        
        </>
    )
}

export default Heading;