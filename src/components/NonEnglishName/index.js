import React from 'react';

const NonEnglishName = (props)=>{
   if (props.movie.title !== props.movie.original_title){
         return `Engligh Title: ${props.movie.title}`
   } else {
       return null
   }
}


export default NonEnglishName;