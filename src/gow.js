// import react and useState
import React, { useState } from 'react';
import './App.css';
import './gow.css';


function War() {
    // call useState and set values
    const [death, setDeath] = useState(0);
    // created function called counterClick, when clicked will increase setDeath by 1
    const counterClick = () => setDeath(death + 1)
    // created function called initialCount, will setDeath back to 0 
    const initialCount = () => setDeath(0);


  return (
<div className="contain">
    <div className="kratos">
        <p>Did You Die?</p>
        <p className='deaths'>Deaths: <span className='dieNum'>{death}</span></p>
    </div>
    <div className="contain-btn">   
        <button className='die' onClick={counterClick}>DIE</button>
        <button className='die' onClick={initialCount}>RESET</button>
    </div>
</div>
  );
}

export default War;
