import React from 'react';
import HtmlParser from '../HtmlParser';

const NonEnglishName = (props)=>{
   if (props.movie.title !== props.movie.original_title){
       return <HtmlParser text ={`English Title: <b>${props.movie.title}<b/>`}/>
   } else {
       return null
   }
}


export default NonEnglishName;