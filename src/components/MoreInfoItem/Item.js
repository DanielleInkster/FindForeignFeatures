import React from 'react';
import ConvertISO from '../Assets/ConvertISO';
import MoreInfoImage from '../MoreInfoItem/MoreInfoImage';
import RecTitle from './MoreInfoTitle';
import MoreInfoNonEnglishName from './MoreInfoNonEnglishName'
import DisplayPlot from './DisplayPlot';
import CheckForUndefined from './CheckForUndefined';
import ReleaseDate from './ReleaseDate';
import IfOmdbIsNull from './IfOmdbIsNull';
import Button from '../Assets/Button';



import '../../stylesheets/MoreInfo/MoreInfoItem.css'


const MoreInfoItem = (props) => {
    return (
        <div className="flex-container">
            {console.log(props.tmdb)}
            <div className="flex-child image">
                <MoreInfoImage tmdb={props.tmdb} omdb={props.omdb} />
            </div>
            <div className="flex-child data">
                <h1 className='title'><RecTitle item={props.tmdb} type={props.type} /></h1>
                <h2 className='nonEng'><MoreInfoNonEnglishName item={props.tmdb} type={props.type} /></h2>
                <h3><ConvertISO language={props.tmdb.original_language} /></h3>
                <h3><u>Plot</u></h3>
                <DisplayPlot omdb={props.omdb.Plot} tmdb={props.tmdb.overview} />
                <b><u>Cast:</u></b> <CheckForUndefined omdb={props.omdb.Actors} />
                <b><u>Writers:</u></b> <CheckForUndefined omdb={props.omdb.Writer} />
                <b><u>Awards and Nominations:</u></b> <CheckForUndefined omdb={props.omdb.Awards} />
                <b><u>IMDB Rating:</u></b> <CheckForUndefined omdb={props.omdb.imdbRating} />
                <br />
                <b><u>Original Release Date:</u></b>  <ReleaseDate omdb={props.omdb.Released} tmdb={props.tmdb} type={props.type} />
                <br />
                {props.type === 'movie' &&
                    <b><u>Rating: </u></b>}
                {props.type === 'movie' &&
                    <CheckForUndefined omdb={props.omdb.Rated} />
                }
                {props.type === 'tv' &&
                    <b><u>Number of Seasons: </u></b>}
                {props.type === 'tv' &&
                    <IfOmdbIsNull omdb={props.omdb.totalSeasons} tmdb={props.tmdb.number_of_seasons}/>
                }
                <b><u>Runtime:</u></b>  <IfOmdbIsNull omdb={props.omdb.Runtime} tmdb={props.tmdb.episode_run_time+" min"} />
                <br />
                <a target="_blank" href={props.url} alt='Find more at IMDB'>
                    <Button value={'Find more at IMDB'} />
                </a>
            </div>
        </div>
    )
}


export default MoreInfoItem