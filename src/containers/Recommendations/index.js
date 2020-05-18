import React, {Component} from 'react';
import Keywords from '../Keywords';
import Genres from '../Genres';
import RecommendationsList from '../../components/RecommendationsList';

class Recommendations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rawKeywordRecommendations:[],
            comparedRecommendations: [],
            sortedRecommendations: [],
            sorted: false,
        }
    }

    componentDidUpdate() {
        if (this.state.comparedRecommendations.length !== 0 && this.state.sorted === false) {
            console.log("sorting!")
            this.returnSortedResults(this.state.comparedRecommendations)
        }
    }

    rawKeywordHandler = (results) => {
        this.setState({ rawKeywordRecommendations: results });
    }

    comparedHandler = (results) => {
        this.setState({ comparedRecommendations: results });
    }

    sortResults=(arr)=>{
        let sorted =  arr.sort((a, b) => (b.returns > a.returns) ? 1 : ((a.returns > b.returns)? -1 : 0))
        return sorted
    }

    returnSortedResults = (arr)=>{
        let sorted = this.sortResults(arr)
        this.setState({ sortedRecommendations: sorted });
        this.setState({ sorted: true })
    }
    

    render(){
        return(
            <div>
                <Keywords movie = {this.props.movie} isFetching = {this.props.isFetching} rawKeywordHandler ={this.rawKeywordHandler}/>
                <Genres movie={this.props.movie} isFetching={this.props.isFetching} comparedHandler={this.comparedHandler} keywordRecs = {this.state.rawKeywordRecommendations}/>
                {this.state.sortedRecommendations.length !==0 &&
                    <RecommendationsList list={this.state.sortedRecommendations}/>}
            </div >  
        )
    }
}

export default Recommendations;