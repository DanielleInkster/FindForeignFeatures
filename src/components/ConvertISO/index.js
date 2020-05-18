import React from 'react';
import HtmlParser from '../HtmlParser';
import ISO6391 from 'iso-639-1';


const ConvertISO =(props)=>{
    let lang;
    props.language === "cn" ? lang = "Chinese" : lang = ISO6391.getName(props.language)

    return(
    <HtmlParser text={`Original language: <b>${lang}</b>`} />
    )
}

export default ConvertISO