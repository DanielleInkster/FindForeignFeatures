import React from 'react';
import NoImage from '../../Images/NoImage.png'

const ImageUrl = (props) =>  {
    let picSource = props.item.poster_path != null ? `https://image.tmdb.org/t/p/w500/${props.item.poster_path}` : NoImage
    return <img src={ picSource } alt={props.item.original_name + " poster."} width="200em" height="300em" />
}
    export default ImageUrl;
