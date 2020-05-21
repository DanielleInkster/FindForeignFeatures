import React from 'react'
import './index.css'

export const CheckBox = props => {
    return (
        <li>
            <input key={props.id} onChange={props.handleCheckChildElement} type="checkbox" 
                checked={props.isChecked} value={props.value} /> <span class='CheckBox'> {props.value}</span>
        </li>
    )
}

export default CheckBox