import React from 'react';

export const Display= (props) => {
 
 return(
    <div className='container'>
        <section className='displayboard'>
            <h1>Strikes</h1>
            <div> {props.strikes}</div>
            <h1>Ball</h1>
            <div> {props.balls}</div>
        </section>
    </div>
 )
}