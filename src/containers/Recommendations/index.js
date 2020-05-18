import React, {Component} from 'react';
import Keywords from '../Keywords';
import Genres from '../Genres';

class Recommendations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rawKeywordRecommendations:[],
            comparedRecommendations: [],
            sorted: false,
        }
    }

    rawKeywordHandler = (results) => {
        this.setState({ rawKeywordRecommendations: results });
    }

    comparedHandler = (results) => {
        this.setState({ comparedRecommendations: results });
    }

    sortResults=(arr)=>{
        console.log(arr.sort((a, b) => (b.returns > a.returns) ? 1 : ((a.returns > b.returns)? -1 : 0)))
         this.setState({sorted: true})
    }

    render(){
        return(
            <div>
                <Keywords movie = {this.props.movie} isFetching = {this.props.isFetching} rawKeywordHandler ={this.rawKeywordHandler}/>
                <Genres movie={this.props.movie} isFetching={this.props.isFetching} comparedHandler={this.comparedHandler} keywordRecs = {this.state.rawKeywordRecommendations}/>
                {this.state.comparedRecommendations.length !== 0 && this.state.sorted === false && 
                     this.sortResults(this.state.comparedRecommendations)}
            </div >  
        )
    }
}

export default Recommendations;