import React, {Component} from 'react';
import Recommendation from '../../containers/Recommendation'
import ReactHtmlParser from 'react-html-parser';
import ISO6391 from 'iso-639-1';
const API_KEY = `${process.env.REACT_APP_DB_API_KEY}`;

const imageUrl = (img) =>  {
    return img != null ? `https://image.tmdb.org/t/p/w500/${img}` : 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'
}

const nonEnglishName = (name)=>{
    if (name.name != name.original_name) return `Engligh Title: ${name.name}` 
}

const checkForNull = (props) =>{
    return props.list === null ? true : false
}


class SeriesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seriesSelection:[],
            keywords:[],
            showing: true
        }
     
    }
    gatherData = (series) => {
        fetch(`https://api.themoviedb.org/3/tv/${series.id}/keywords?api_key=${API_KEY}`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                this.setState({ keywords: data })
                console.log(this.state.keywords)
                console.log(this.state.seriesSelection)
            })
        
    }

    handleSeriesSubmit = (series) => {
        this.setState({seriesSelection: series})
        this.gatherData(series)
        this.setState({ showing: false })
    }

    render(){
    const { showing } = this.state;

    if (checkForNull(this.props.list) === false) {
    return(
        <div>
        <div style={{ display: (showing ? 'block' : 'none') }}> {this.props.list.map(series =>
            <li style={{ listStyleType: "none" }}>
                <img src={imageUrl(series.poster_path)} alt={series.original_name+" poster."} width="20%" height="40%"/>
                <br/>
                <h2><b>{series.original_name}</b></h2>
                <h4>{nonEnglishName(series)}</h4>
                {ReactHtmlParser(series.overview)}
                <br/>
                <br />
                {ReactHtmlParser(`Original language: <b>${ISO6391.getName(series.original_language)}</b>`)}
                <br />
                <br />
                <input type="submit" value="Find more like this!" onClick={() => { this.handleSeriesSubmit(series) }} />
                <br />
                <br />
            </li>)}
        </div>
        <div style={{ display: (!showing ? 'block' : 'none') }}> This is visible</div>
        </div>
    )
    } else {
        return (
        <div>
            <h1>No results found. Please try another title.</h1>
        </div>
        )
        }
    }
}
export default SeriesList;