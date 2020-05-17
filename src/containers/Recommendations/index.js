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
        console.log(results)
    }

    counter(arr){
    var counts = {};
    arr.forEach(function (x) { counts[x.id] = (counts[x.id] || 0) + 1; });
    console.log(counts)
    }

    render(){
        return(
            <div>
            <Keywords movie = {this.props.movie} isFetching = {this.props.isFetching} rawKeywordHandler ={this.rawKeywordHandler}/>
            <Genres movie= {this.props.movie} isFetching={this.props.isFetching} rawGenreHandler={this.rawGenreHandler}/>
            {/* {this.state.rawGenreRecommendations !== 0 && this.counts(this.state.rawGenreRecommendations)} */}
            </div >

            
            
        )
    }
}

export default Recommendations;