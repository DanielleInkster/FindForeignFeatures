import React from 'react';
import ConvertISO from '../ConvertISO';
import RecommendationImage from '../RecommendationImage';
import RecTitle from '../RecTitle';
import RecNonEnglishName from '../RecNonEnglishName'
import DisplayPlot from '../DisplayPlot';
import CheckForUndefined from '../CheckForUndefined';
import Button from '../Button';


import './MoreInfoItem.css'


const MoreInfoItem=(props)=>{
    return(
            <div className="flex-container">
            <div className="flex-child image">
                <RecommendationImage tmdb={props.tmdb} omdb={props.omdb} />
            </div>
            <div className="flex-child data">
                <h1 className='title'><RecTitle item={props.tmdb} type={props.type} /></h1>
                <h2 className='nonEng'><RecNonEnglishName item={props.tmdb} type={props.type} /></h2>
                <p id="text"><ConvertISO language={props.tmdb.original_language} /></p>
                <h3><u>Plot</u></h3>
                <DisplayPlot omdb={props.omdb.Plot} tmdb={props.tmdb.overview}/>
                <br />
                <br/>
                <b><u>Cast:</u></b> <CheckForUndefined omdb={props.omdb.Actors}/>
                <br />
                <b><u>Writers:</u></b> <CheckForUndefined omdb={props.omdb.Writer}/>
                <br />
                <b><u>Awards and Nominations:</u></b> <CheckForUndefined omdb={props.omdb.Awards}/>
                <br />
                <b><u>IMDB Rating:</u></b> <CheckForUndefined omdb={props.omdb.imdbRating}/>
                <br />
                <br />
                <b><u>Original Release Date:</u></b>  <CheckForUndefined omdb={props.omdb.Released}/>
                <br />
                {props.type ==='movie' &&
                    <b><u>Rating: </u></b> } 
                {props.type === 'movie' &&
                    <CheckForUndefined omdb={props.omdb.Rated}/>
                }
                {props.type === 'tv' &&
                    <b><u>Number of Seasons: </u></b> }
                {props.type === 'tv' &&
                     <CheckForUndefined omdb={props.omdb.totalSeasons}/>
                }
                <br />
                <b><u>Runtime:</u></b>  <CheckForUndefined omdb={props.omdb.Runtime}/>
                <br />
                <a target="_blank" href= {props.url}>
                <Button value={'Find more at IMDB'}/>
                </a>
            </div>
        </div>
    )
}

export default MoreInfoItem