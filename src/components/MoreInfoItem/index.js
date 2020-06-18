import React from 'react';
import ConvertISO from '../ConvertISO';
import ImageUrl from '../ImageUrl';
import Title from '../Title';
import NonEnglishName from '../NonEnglishName'
import DisplayPlot from '../DisplayPlot';
import CheckForUndefined from '../CheckForUndefined';

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
                <DisplayPlot omdb={props.omdb.Plot} tmdb={props.tmdb.overview}/>
                <br />
                <br/>
                <u>Actors:</u> <CheckForUndefined omdb={props.omdb.Actors}/>
                <br />
                <u>Writer(s):</u> <CheckForUndefined omdb={props.omdb.Writer}/>
                <br />
                <u>Nominations and Awards:</u> <CheckForUndefined omdb={props.omdb.Awards}/>
                <br />
                <u>IMDB rating:</u> <CheckForUndefined omdb={props.omdb.imdbRating}/>
                <br />
                <br />
                <u>Original Realease Date:</u> <CheckForUndefined omdb={props.omdb.Released}/>
                <br />
                <u>Rating:</u> <CheckForUndefined omdb={props.omdb.Rated}/>
                <br />
                <u> Runtime:</u> <CheckForUndefined omdb={props.omdb.Runtime}/>
                <br />
            </div>
        </div>
    )
}

export default MoreInfoItem