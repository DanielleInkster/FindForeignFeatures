import React, {Component} from 'react';

class SortRecommendations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedRecommendations: [],
        }
    }

    componentDidMount() {
            this.returnSortedResults(this.props.comparedRecommendations)
    }

    redirect(to, recommendations) {
        this.props.info.history.push({ pathname: to, recommendations })
    }

    sortResults=(arr)=>{
        let sorted =  arr.sort((a, b) => (b.returns > a.returns) ? 1 : ((a.returns > b.returns)? -1 : 0))
        return sorted
    }

    returnSortedResults = (arr)=>{
        let sorted = this.sortResults(arr)
        this.redirect(`/${this.props.info.match.params.mediaType}/${this.props.info.match.params.id}/recommendations`, sorted.slice(0, 50))
    }

    render(){

        return(
            null
        )
    }
}

export default SortRecommendations;