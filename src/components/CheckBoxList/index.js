import React from 'react';
import CheckBox from '../CheckBox';

const CheckBoxList = (props) =>{
    return(
    <ul style={{ listStyleType: "none" }} >
        {props.options.map((entry) => {
            return (<CheckBox handleCheckChildElement={props.handleChildElement}  {...entry} />)
        })
        }
    </ul>
    )
}
export default CheckBoxList