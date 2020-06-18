import React from 'react'

const DisplayPlot=(props)=>{
    let plot = props.omdb !==undefined && props.omdb.length > props.tmdb.length ?  props.omdb : props.tmdb
    return plot
}

export default DisplayPlot