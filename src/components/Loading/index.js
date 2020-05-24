import React from 'react';
import loaderSrc from '../../Images/loading.gif';
import './Loading.css'

const Loading =()=>(
    <div>
        <img src={loaderSrc} alt="Loading" width="15%" height="15%" className="Loader"/>
    </div>   
)
export default Loading