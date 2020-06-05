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
        if(results.length !== 0){
            this.setState({ comparedRecommendations: results })
         }else{
              this.setState({ noResults: true }) 
              this.setState({ isLoading: false }) 
         }
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

    // noMatchesFound(input, input2){
    //     if(this.state.noResults === true){
    //         return(
    //         <div>
    //             <h1><Message text={input} /></h1>
    //             <p><Message text={input2} /></p>  
    //         </div>
    //         )
    //     }
    // }
    
    render(){
        // let input = "<div id='wow'>Some things are one of a kind!</div>"
        // let input2 = "<div id ='text'>No matches were found.</div>"

        return(
            <div>
                <Keywords item={this.props.item} isFetching={this.props.isFetching} isLoading={this.state.isLoading}  
                    rawKeywordHandler={this.rawKeywordHandler} handleLoadState={this.handleLoadState} 
                    type={this.props.type} 
                    />

                {this.state.noResults === false &&
                <Genres item={this.props.item} isFetching={this.props.isFetching} comparedHandler={this.comparedHandler} 
                        keywordRecs={this.state.rawKeywordRecommendations} type={this.props.type}
                    />
                }
                {this.state.sortedRecommendations.length !== 0 && this.state.noResults === false &&
                    <RecommendationsList list={this.state.sortedRecommendations.slice(0, 50)} type ={this.props.type} />
                    }
                {/* {this.noMatchesFound(input, input2)} */}
            </div >  
        )
    }
}

export default Recommendations;