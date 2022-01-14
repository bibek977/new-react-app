import React from 'react'
import './sass/card.css'
import movies from './Movies'

const Card = (props)=>{
    return(
        <>
        <div className="card">
            <div className="card-main">
                <div className="card-img">
                    <img src={props.src} alt="" />
                </div>
                <div className="card-title">{props.title}</div>
                <div className="card-info">{props.info}</div>
                <div className="card-link"><a href={props.link} target='__blank'>Watch Now</a></div>
            </div>
        </div>
        </>
    )

}

// const listCard=(value)=>{
//     // console.log(value)
//     return(
//         <Card 
//         title = {value.title}
//         src = {value.img}
//         info = {value.info}
//         link = {value.link} >

//         </Card>
//     )
// }

const Cards=()=>{
    // console.log(movies[0])
    return(
    <>
    <h1>Movies Online - MySite</h1>
        <div className='card-items'>

            
            {movies.map((value)=>{
                return(

                    <Card
                    src={value.img} 
                    title = {value.title} 
                    info = {value.info}
                    link = {value.link} >

                </Card>
                    )
            })}


        </div>
        </>
    )
}

export default Cards