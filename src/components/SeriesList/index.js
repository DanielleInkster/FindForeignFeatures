import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import ISO6391 from 'iso-639-1';
import GatherData from '../../containers/GatherData';
import ImageUrl from '../ImageUrl';
import NonEnglishName from '../NonEnglishName';

const CheckForNull = (item) => {
    return (item === null) ? true : false
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
    
    
    if (CheckForNull(this.props.list) === false) {
        
    return(

        <div>

            {console.log(this.props.list)}
            <div style={{ display: (showing ? 'block' : 'none') }}> {this.props.list.map(series =>
                <li style={{ listStyleType: "none" }} key={series.id}>
                    <ImageUrl series={series} />
                    <br/>
                    <h2><b>{series.original_name}</b></h2>
                    <h4>{<NonEnglishName series ={series}/>}</h4>
                    {ReactHtmlParser(series.overview)}
                    <br/><br />
                    {ReactHtmlParser(`Original language: <b>${ISO6391.getName(series.original_language)}</b>`)}
                    <br /><br />
                    <input type="submit" value="Find more like this!" onClick={() => { this.handleSeriesSubmit(series) }} />
                    <br /><br />
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