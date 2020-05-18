import React, {Component} from 'react';
import Keywords from '../Keywords';
import Genres from '../Genres';

class Recommendations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rawKeywordRecommendations:[],
            rawGenreRecommendations: [],
            conCatRecommendations:[]
        }
    }

    rawKeywordHandler = (results) => {
        this.setState({ rawKeywordRecommendations: results });
        console.log(results)
    }

    rawGenreHandler = (results) => {
        this.setState({ rawGenreRecommendations: results });
        console.log(results.length)
    }

    joinResults=(arr1, arr2)=>{
        return arr1.concat(arr2)
    }

    count =(arr)=>{
        var counts = {};
        arr.forEach(function (x) { counts[x.id] = (counts[x.id] || 0) + 1; })
        console.log(counts)
    }

    countResults(arr1, arr2){
        let arr = this.joinResults(arr1,arr2)
        this.count(arr)
        console.log(arr.length)
        this.setState({conCatRecommendations: arr})
    }



    render(){
        return(
            <div>
                <Keywords movie = {this.props.movie} isFetching = {this.props.isFetching} rawKeywordHandler ={this.rawKeywordHandler}/>
                <Genres movie= {this.props.movie} isFetching={this.props.isFetching} rawGenreHandler={this.rawGenreHandler}/>
                {this.state.rawGenreRecommendations.length !== 0 && this.state.rawKeywordRecommendations.length !== 0 && this.state.conCatRecommendations.length=== 0
                    && this.countResults(this.state.rawGenreRecommendations, this.state.rawKeywordRecommendations)}
            </div >  
        )
    }
}

export default Recommendations;