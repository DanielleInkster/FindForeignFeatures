import React from 'react';
import { checkPropTypes } from 'prop-types';

const Input = (props)=>{
   return <input type="text" value={props.value} onChange={props.onChange} />
}

export default Input;