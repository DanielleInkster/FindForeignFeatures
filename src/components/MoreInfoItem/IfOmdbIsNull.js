import React from 'react'

const IfOmdbIsNull = (props) => {
    console.log(props.omdb, props.tmdb)
    let data =''
    if(props.omdb !== undefined && props.omdb !=='N/A'){
         data = props.omdb
    } else if ((props.omdb === undefined || props.omdb === 'N/A')  && props.tmdb !== undefined ){
        data = props.tmdb.toString()
    } else {
         data = 'N/A'
    }

    return (
        <span>{data} <br /></span>
    )
}

export default IfOmdbIsNull