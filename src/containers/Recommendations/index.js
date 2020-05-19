import React, {Component} from 'react';
import Keywords from '../Keywords';
import Genres from '../Genres';
import Message from '../../components/Message';
import RecommendationsList from '../../components/RecommendationsList';

class Recommendations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rawKeywordRecommendations:[],
            comparedRecommendations: [],
            sortedRecommendations: [],
            isLoading:false,
            noResults: false,
            sorted: false,
        }
    }

    componentDidUpdate() {
        if (this.state.comparedRecommendations.length !== 0 && this.state.sorted === false) {
            this.returnSortedResults(this.state.comparedRecommendations)
        }
    }

    handleLoadState = (results) => {
        this.setState({ isLoading: results });
    }

    rawKeywordHandler = (results) => {
        results.length !== 0 ? this.setState({ rawKeywordRecommendations: results }) : this.setState({ noResults: true })
    }

    comparedHandler = (results) => {
        this.setState({ comparedRecommendations: results }) 
    }

    sortResults=(arr)=>{
        let sorted =  arr.sort((a, b) => (b.returns > a.returns) ? 1 : ((a.returns > b.returns)? -1 : 0))
        return sorted
    }

    returnSortedResults = (arr)=>{
        let sorted = this.sortResults(arr)
        this.setState({ sortedRecommendations: sorted });
        this.setState({ sorted: true })
        this.setState({ isLoading: false })
    }
    
    render(){
        let input = "Some things are one of a kind! No matches were found."

        return(
            <div>
                <Keywords movie={this.props.movie} 
                    isFetching={this.props.isFetching}
                    isLoading={this.state.isLoading}  
                    rawKeywordHandler={this.rawKeywordHandler} 
                    handleLoadState={this.handleLoadState} 
                    />

                {this.state.noResults === false &&
                <Genres movie={this.props.movie} 
                    isFetching={this.props.isFetching} 
                    comparedHandler={this.comparedHandler} 
                    keywordRecs = {this.state.rawKeywordRecommendations}
                    />
                }
                {this.state.sortedRecommendations.length !== 0 && this.state.noResults === false &&
                    <RecommendationsList list={this.state.sortedRecommendations.slice(0, 50)} />
                    }
                {this.state.noResults === true &&
                    <h1><Message text={input} /></h1> 
                }
            </div >  
        )
    }
}

export default Recommendations;