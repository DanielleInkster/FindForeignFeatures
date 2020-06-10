import React from 'react';
import NotFound from '../../Images/404.gif';
import './PageNotFound.css'

const PageNotFound = () => (
    <div>
        <img src={NotFound} alt="Not Found" id="NotFound" />
    </div>
)
export default PageNotFound