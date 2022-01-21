import React from 'react';
import { Fname, Lname } from './Context';

const ContextC = ()=>{
    return (
        <>
        <div className='context-c'>
            <Fname.Consumer >
                {(myfirstName)=>{
                    return (
                        <Lname.Consumer>
                            {(mylastName)=>{
                                return(
                                    <h1>Gracious, {myfirstName} {mylastName}</h1>
                                    )
                                }}
                        </Lname.Consumer>
                    )
                }}
            </Fname.Consumer>
        </div>
                </>
    )
}

export default ContextC;
