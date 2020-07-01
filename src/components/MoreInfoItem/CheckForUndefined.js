// eslint-disable-next-line
import React from 'react'

const CheckForUndefined=(props)=>{
   let data = props.omdb !== undefined ? props.omdb : 'N/A'
   return (
      <span>{data}<br/></span>
   )
}

export default CheckForUndefined