import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import ISO6391 from 'iso-639-1';
import GatherData from '../../containers/GatherData';

const imageUrl = (img) =>  {
    return img != null ? `https://image.tmdb.org/t/p/w500/${img}` : 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'
}

const nonEnglishName = (name)=>{
    if (name.name != name.original_name) return `Engligh Title: ${name.name}` 
}

const checkForNull = (props) =>{
    return props === null ? true : false
}

class SeriesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seriesSelection : [],
            showing: true,
        }
     
    }

    handleSeriesSubmit = (series) => {
        this.setState({seriesSelection: series});
        this.setState({ showing: false });
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
            <div style={{ display: (!showing ? 'block' : 'none') }}> 
                <GatherData data = {this.state.seriesSelection} />
            </div>
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