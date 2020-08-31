import React from 'react';
import './UserInput.css';

const userinput = (props) => {
    return (
       <div>
           <input type="text" onChange={props.changed} value={props.valor}/>
       </div>
    )
}

export default userinput;