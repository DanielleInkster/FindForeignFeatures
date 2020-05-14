import React from 'react';

const NonEnglishName = (props)=>{
   if (props.movie.name !== props.movie.original_name){
         return `Engligh Title: ${props.movie.name}`
   } else {
       return null
   }
}


export default NonEnglishName;