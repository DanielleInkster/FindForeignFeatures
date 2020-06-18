import React, {Component} from 'react';
import NoImage from '../../Images/NoImage.png'
import './recImage.css'

class RecommendationImage extends Component {
   choosePicSource(){
     if(this.props.tmdb.poster_path !== null) {
         return `https://image.tmdb.org/t/p/w500/${this.props.tmdb.poster_path}`
         
     } else if (this.props.omdb.Poster !== null && this.props.omdb.Poster !== "N/A" && this.props.omdb.Poster !== undefined ){
         return this.props.omdb.Poster
    } else{
        return NoImage
        }
    }

    render(){
        return <img src={this.choosePicSource()} alt={"Media Poster"} id="recPoster" />
    }
}
export default RecommendationImage;
