import React from 'react';
import HtmlParser from '../HtmlParser';

const NonEnglishName = (props)=>{
    let searchTerm = ''
    let searchTerm2 = ''
    props.type === 'tv' ? searchTerm = "name" : searchTerm = "title"
    props.type === 'tv' ? searchTerm2 = "original_name" : searchTerm2 = "original_title"

    if (props.item[searchTerm] !== props.item[searchTerm2] && props.item[searchTerm].length <40){
       return <HtmlParser text ={`English Title: <b>${props.item[searchTerm]}</b>`}/>
    } else if (props.item[searchTerm] !== props.item[searchTerm2] && props.item[searchTerm].length > 40) {
        return <HtmlParser text={`English Title: <b>${props.item[searchTerm].slice(0,40)}...</b>`} />
    } else {
       return <HtmlParser text={`English Title: <b>N/A</b>`}/>
   }
}


export default NonEnglishName;