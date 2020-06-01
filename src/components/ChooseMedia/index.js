import React from 'react';
import {Link} from 'react-router-dom'
import Button from '../Button';

const ChooseMedia = (props) => {
 
        return (
            <div>
                <Link to="/movie">
                <Button value="Film" onClick = {props.onClick} />
                </Link>

                <Link to="/tv">
                <Button value="TV Series" onClick={props.onClick} />
                </Link>
            </div>
        );
    
}

export default ChooseMedia;
