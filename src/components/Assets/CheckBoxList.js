import React from 'react';
import CheckBox from './CheckBox';
import '../../stylesheets/Assets/CheckBoxList.css';

const CheckBoxList = (props) =>{
    return(
    <ul >
        {props.options.map((entry) => {
            return (<CheckBox handleCheckChildElement={props.handleChildElement}  {...entry} />)
        })
        }
    </ul>
    )
}
export default CheckBoxList