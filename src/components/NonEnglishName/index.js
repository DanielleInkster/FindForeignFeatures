import React from 'react';
import HtmlParser from '../HtmlParser';

const NonEnglishName = (props)=>{
    let searchTerm = ''
    let searchTerm2 = ''
    props.type === 'tv' ? searchTerm = "name" : searchTerm = "title"
    props.type === 'tv' ? searchTerm2 = "original_name" : searchTerm2 = "original_title"

   if (props.movie[searchTerm] !== props.movie[searchTerm2]){
       return <HtmlParser text ={`English Title: <b>${props.movie[searchTerm]}<b/>`}/>
   } else {
       return null
   }
}


export default NonEnglishName;