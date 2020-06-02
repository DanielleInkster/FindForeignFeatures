import React from 'react';
import { Link, useLocation } from "react-router-dom";
import Button from '../Button';


const ChooseMedia = (props) => {
 
        return (
            <div>
                <Link to={{
                    pathname: '/movie',
                    }}>
                
                <Button value="Film" />
                </Link>

                <Link to={{
                    pathname: '/tv',
                }}>
                <Button value="TV Series" />
                </Link>
            </div>
        );
    
}

export default ChooseMedia;
