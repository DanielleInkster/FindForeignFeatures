import React, {Component} from 'react';
import ListItem from '../ListItem';
import Button from '../Button';
import Loading from '../Loading'
import SelectKeywords from '../../containers/SelectKeywords';
import GatherRecommendations from '../../containers/GatherRecommendations';
const API_KEY = `${process.env.REACT_APP_DB_API_KEY}`


class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieSelection : [],
            keywords:[],
            isFetching: false,
            showing: true,
        } 
    }

    findKeywordsFetch = (value) => {
        fetch(`https://api.themoviedb.org/3/movie/${value}/keywords?api_key=${API_KEY}`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                this.setState({ keywords: data.keywords })
                this.setState({ isFetching: false })
            })
    }

    handleMovieSubmit = (movie) => {
        this.setState({movieSelection: movie});
        this.setState({ isFetching: true })
        this.findKeywordsFetch(movie.id)
        this.setState({ showing: false });
    }

    handler = (results)=>{
        this.setState({ keywords: results });
        console.log(results)
    }

    render(){
    const { showing } = this.state;
        
    return(
        <div>
            <div style={{ display: (showing ? 'block' : 'none') }}> {this.props.list.map(movie =>
                <li style={{ listStyleType: "none" }} key={movie.id}>
                    <ListItem movie={movie} />
                    <Button value="Find more like this!" onClick={() => { this.handleMovieSubmit(movie)}} />
                    <br /><br />
                </li>)}
            </div>
            <div style={{ display: (!showing ? 'block' : 'none') }}> 
                {this.state.isFetching && <Loading />}
                {this.state.keywords.length > 3 && <SelectKeywords keywords={this.state.keywords} handler = {this.handler} />}
                {this.state.keywords.length < 4 && <GatherRecommendations keywords={this.state.keywords} />}
            </div>
        </div>
    ) 
    }
}
export default MoviesList;