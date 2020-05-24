import React from 'react'
import './CheckBox.css'

export const CheckBox = props => {
    return (
        <li>
            <input key={props.id} onChange={props.handleCheckChildElement} type="checkbox" 
                checked={props.isChecked} value={props.value} /> <span className='text'id="CheckBox"> {props.value}</span>
        </li>
    )
}

export default CheckBox