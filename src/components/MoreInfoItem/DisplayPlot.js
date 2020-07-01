// eslint-disable-next-line
import React from 'react'
import '../../stylesheets/MoreInfo/MoreInfoPlot.css'

const DisplayPlot=(props)=>{
    let plot = props.omdb !==undefined && props.omdb.length > props.tmdb.length ?  props.omdb : props.tmdb
    return (
        <div id="plot">{plot} <br/><br/></div>
    )
}

export default DisplayPlot