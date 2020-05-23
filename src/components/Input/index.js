import React from 'react';
import './input.css'

const Input = (props)=>{
   return <input className="Input" id="Questrial" type="text" value={props.value} onChange={props.onChange} />
}

export default Input;