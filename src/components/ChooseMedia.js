import React from 'react';
import { Link } from "react-router-dom";
import Button from './Assets/Button';

const ChooseMedia = () => {
 
        return (
            <div>
                <Link to={{pathname: '/movie'}}>
                <Button value="Film"/>
                </Link>

                <Link to={{pathname: '/tv'}}>
                    <Button value="TV Series"/>
                </Link>
            </div>
        );
    
}

export default ChooseMedia;
