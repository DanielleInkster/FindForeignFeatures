import React from 'react';

const ImageUrl = (props) =>  {
    if(props.movie.poster_path != null){
        return <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={props.movie.original_name + " poster."} width="20%" height="40%" />
    } else { 
        return <img src={'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'} alt={props.movie.original_name + " poster."} width="20%" height="40%" />
    }
}
    export default ImageUrl;
