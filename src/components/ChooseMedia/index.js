import React from 'react';
import Button from '../Button';

const ChooseMedia = (props) => {
 
        return (
            <div>
                <Button value="Film" onClick = {props.onClick} />
                <Button value="TV Series" onClick={props.onClick} />
            </div>
        );
    
}

export default ChooseMedia;
