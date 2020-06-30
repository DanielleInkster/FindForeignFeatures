import React from 'react';
import { connect } from 'react-redux'
import ConvertISO from '../Assets/ConvertISO';
import MoreInfoImage from '../MoreInfoItem/MoreInfoImage';
import RecTitle from './MoreInfoTitle';
import MoreInfoNonEnglishName from './MoreInfoNonEnglishName'
import DisplayPlot from './DisplayPlot';
import CheckForUndefined from './CheckForUndefined';
import ReleaseDate from './ReleaseDate';
import Button from '../Assets/Button';



import '../../stylesheets/MoreInfo/MoreInfoItem.css'


const MoreInfoItem=(props)=>{
    return(
            <div className="flex-container">
            <div className="flex-child image">
                <MoreInfoImage tmdb={props.tmdb_info} omdb={props.omdb_info} />
            </div>
            <div className="flex-child data">
                <h1 className='title'><RecTitle item={props.tmdb_info} type={props.type} /></h1>
                <h2 className='nonEng'><MoreInfoNonEnglishName item={props.tmdb_info} type={props.type} /></h2>
                <h3><ConvertISO language={props.tmdb_info.original_language} /></h3>
                <h3><u>Plot</u></h3>
                <DisplayPlot omdb={props.omdb_info.Plot} tmdb={props.tmdb_info.overview}/>
                    <br />
                    <br/>
                <b><u>Cast:</u></b> <CheckForUndefined omdb={props.omdb_info.Actors}/>
                    <br />
                <b><u>Writers:</u></b> <CheckForUndefined omdb={props.omdb_info.Writer}/>
                    <br />
                <b><u>Awards and Nominations:</u></b> <CheckForUndefined omdb={props.omdb_info.Awards}/>
                    <br />
                <b><u>IMDB Rating:</u></b> <CheckForUndefined omdb={props.omdb_info.imdbRating}/>
                    <br />
                    <br />
                <b><u>Original Release Date:</u></b>  <ReleaseDate omdb={props.omdb_info.Released} tmdb={props.tmdb_info} type={props.type}/>
                    <br />
                {props.type ==='movie' &&
                    <b><u>Rating: </u></b> } 
                {props.type === 'movie' &&
                    <CheckForUndefined omdb={props.omdb_info.Rated}/>
                }
                {props.type === 'tv' &&
                    <b><u>Number of Seasons: </u></b> }
                {props.type === 'tv' &&
                    <CheckForUndefined omdb={props.omdb_info.totalSeasons}/>
                }
                    <br />
                <b><u>Runtime:</u></b>  <CheckForUndefined omdb={props.omdb_info.Runtime}/>
                    <br />
                    <br />
                <a target="_blank" href={props.url} alt='Find more at IMDB'>
                    <Button value={'Find more at IMDB'} />
                </a>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tmdb_info: state.tmdb_info,
        omdb_info: state.omdb_info
    }
}

export default connect(mapStateToProps, null)(MoreInfoItem);