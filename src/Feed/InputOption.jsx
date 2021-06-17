import React from 'react'
import './InputOption.css';


const InputOption = ({Icon, tittle, color}) => {
    return ( <div className="input">
        <Icon style={{color:color}}/>
        <h4>{tittle}</h4>
        
    </div> );
}
 
export default InputOption;