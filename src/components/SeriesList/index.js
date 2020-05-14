import React, {Component} from 'react';
import ListItem from '../ListItem';
import Button from '../Button';
import Loading from '../../components/Loading'
import SelectKeywords from '../../containers/SelectKeywords';
const API_KEY = `${process.env.REACT_APP_DB_API_KEY}`


class SeriesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seriesSelection : [],
            keywords:[],
            isFetching: false,
            showing: true,
        } 
    }

    findKeywordsFetch = (value) => {
        fetch(`https://api.themoviedb.org/3/tv/${value}/keywords?api_key=${API_KEY}`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                this.setState({ keywords: data.results })
                this.setState({ isFetching: false })
            })
    }

    handleSeriesSubmit = (series) => {
        this.setState({seriesSelection: series});
        this.setState({ isFetching: true })
        this.findKeywordsFetch(series.id)
        this.setState({ showing: false });
    }

    render(){
    const { showing } = this.state;
        
    return(
        <div>
            <div style={{ display: (showing ? 'block' : 'none') }}> {this.props.list.map(series =>
                <li style={{ listStyleType: "none" }} key={series.id}>
                    <ListItem series = {series} />
                    <Button value="Find more like this!" onClick={() => {this.handleSeriesSubmit(series)}} />
                    <br /><br />
                </li>)}
            </div>
            <div style={{ display: (!showing ? 'block' : 'none') }}> 
                {this.state.isFetching && <Loading />}
                {this.state.keywords.length > 3 && <SelectKeywords data={this.state} />}
            </div>
        </div>
    ) 
    }
}
export default SeriesList;