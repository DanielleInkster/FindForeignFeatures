import React from 'react';
import ConvertISO from '../ConvertISO';
import ImageUrl from '../ImageUrl';
import Title from '../Title';
import NonEnglishName from '../NonEnglishName'

import './MoreInfoItem.css'


const MoreInfoItem=(props)=>{
    return(
            <div class="flex-container">
            <div class="flex-child image">
                <ImageUrl item={props.tmdb} type={props.type} />
            </div>
            <div class="flex-child data">
                <h1 className='mediaHeading'><Title item={props.tmdb} type={props.type} /></h1>
                <h2 className='mediaHeading'><NonEnglishName item={props.tmdb} type={props.type} /></h2>
                <p id="text"><ConvertISO language={props.tmdb.original_language} /></p>
                <p id="text">{props.omdb.Country}</p>
                <br/>
                {props.tmdb.overview}
                <br />
                <br />
                {props.omdb.Plot}
                <br />
                <br/>
                <u>Actors:</u> {props.omdb.Actors}
                <br />
                <u>Writer(s):</u> {props.omdb.Writer}
                <br />
                <u>Nominations and Awards:</u> {props.omdb.Awards}
                <br />
                <u>IMDB rating:</u> {props.omdb.imdbRating}
                <br />
                <br />
                <u>Original Realease Date:</u> {props.omdb.Released}
                <br />
                <u>Rating:</u> {props.omdb.Rated}
                <br />
                <u> Runtime:</u> {props.omdb.Runtime}
                <br />
            </div>
        </div>
    )
}

export default MoreInfoItem