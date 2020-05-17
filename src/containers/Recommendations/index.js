import React, {Component} from 'react';
import Keywords from '../Keywords';
import Genres from '../Genres';

class Recommendations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rawKeywordRecommendations:[],
            rawGenreRecommendations: [],
        }
    }

    rawKeywordHandler = (results) => {
        this.setState({ rawKeywordRecommendations: results });
    }

    rawGenreHandler = (results) => {
        this.setState({ rawGenreRecommendations: results });
    }

    render(){
        return(
            <div>
                <Keywords movie = {this.props.movie} isFetching = {this.props.isFetching} rawKeywordHandler ={this.rawKeywordHandler}/>
                <Genres movie= {this.props.movie} isFetching={this.props.isFetching} rawGenreHandler={this.rawGenreHandler}/>
            </div >  
        )
    }
}

export default Recommendations;