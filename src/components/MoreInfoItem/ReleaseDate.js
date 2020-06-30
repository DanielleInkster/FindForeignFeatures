// eslint-disable-next-line
import React from 'react'


const ReleaseDate = (props) => {
    let searchTerm = props.type === 'tv' ? "first_air_date" : "release_date"
    let data = ''
    
    if(props.omdb !== undefined ){
        data = props.omdb
    } else if(props.tmdb[searchTerm] !== undefined){
        data = props.tmdb[searchTerm]
    } else{
        data = 'N/A'
    }
    return data
}

export default ReleaseDate