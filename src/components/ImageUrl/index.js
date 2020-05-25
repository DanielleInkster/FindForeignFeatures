import React from 'react';

const ImageUrl = (props) =>  {
    let picSource = props.item.poster_path != null ? `https://image.tmdb.org/t/p/w500/${props.item.poster_path}` : 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'
    return <img src={ picSource } alt={props.item.original_name + " poster."} width="200em" height="300em" />
}
    export default ImageUrl;
