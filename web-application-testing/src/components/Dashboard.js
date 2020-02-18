import React, {useState} from 'react';
import {Display} from './Display';

export const Dashboard = () => {
 const [strike, setStrike] = useState(0);
 const [ball, setBall] = useState(0);

 const handleStrike = () => {
     if(strike < 3) {
         setStrike(strike + 1)
     };
 };

 const handleBalls = () => {
     if(ball < 4){
         setBall(ball + 1)
     };
 };

 const handleFoul = () => {
     if(strike < 2) {
         setStrike(strike + 1)
     }
 }

 const handleHit = () => {
     setStrike(0);
     setBall(0);
 }

 return(
    <div className='container'>
       <Display strikes={strike} balls={ball}/>
           <button onClick={handleStrike}>Strike</button>
           <button onClick={handleBalls}>Ball</button>
           <button onClick={handleFoul}>Foul</button>
           <button onClick={handleHit}>Hit</button>
    </div>
 )
}