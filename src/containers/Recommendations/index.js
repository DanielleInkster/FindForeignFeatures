import React, {Component} from 'react';
import Keywords from '../Keywords';
import Genres from '../Genres';

class Recommendations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rawKeywordRecommendations:[],
            comparedRecommendations: [],
        }
    }

    rawKeywordHandler = (results) => {
        this.setState({ rawKeywordRecommendations: results });
        // console.log(results)
    }

    comparedHandler = (results) => {
        this.setState({ comparedRecommendations: results });
        console.log(results)
    }




    render(){
        return(
            <div>
                <Keywords movie = {this.props.movie} isFetching = {this.props.isFetching} rawKeywordHandler ={this.rawKeywordHandler}/>
                <Genres movie={this.props.movie} isFetching={this.props.isFetching} comparedHandler={this.comparedHandler} keywordRecs = {this.state.rawKeywordRecommendations}/>
                {/* {this.state.rawGenreRecommendations.length !== 0 && this.state.rawKeywordRecommendations.length !== 0 && this.state.conCatRecommendations.length=== 0
                    && this.countResults(this.state.rawGenreRecommendations, this.state.rawKeywordRecommendations)} */}
            </div >  
        )
    }
}

export default Recommendations;