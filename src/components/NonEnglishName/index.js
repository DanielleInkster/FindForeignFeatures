import React from 'react';

const NonEnglishName = (props)=>{
   if (props.series.name !== props.series.original_name){
         return `Engligh Title: ${props.series.name}`
   } else {
       return null
   }
}


export default NonEnglishName;