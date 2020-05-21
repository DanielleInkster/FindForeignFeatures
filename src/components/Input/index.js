import React from 'react';
import './index.css'

const Input = (props)=>{
   return <input id="Input" type="text" value={props.value} onChange={props.onChange} size ="50" />
}

export default Input;