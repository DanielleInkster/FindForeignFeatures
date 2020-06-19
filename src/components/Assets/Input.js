import React from 'react';
import '../../stylesheets/Assets/Input.css'

const Input = (props)=>{
   return <input className="Input" type="text" value={props.value} onChange={props.onChange} />
}

export default Input;