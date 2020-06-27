// eslint-disable-next-line
import React, {Component} from 'react';
import {connect} from 'react-redux';

class SortRecommendations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedRecommendations: [],
        }
    }

    componentDidMount() {
        this.returnSortedResults(this.props.comparedRecommendations)
        window.scrollTo(0, 0)
    }

    redirect(to) {
        this.props.info.props.history.push({ pathname: to })
    }

    sortResults=(arr)=>{
        let sorted =  arr.sort((a, b) => (b.returns > a.returns) ? 1 : ((a.returns > b.returns)? -1 : 0))
        return sorted
    }

    returnSortedResults = (arr)=>{
        console.log(this.props)
        let sorted = this.sortResults(arr)
        this.props.storeRecommendations(sorted.slice(0, 50))
        this.redirect(`/${this.props.info.props.match.params.mediaType}/${this.props.info.props.match.params.id}/recommendations` )
    }

    render(){

        return(
            null
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeRecommendations: (list) => dispatch({ type: 'RECOMMENDATIONS', val: list })
    }
}

export default connect(null, mapDispatchToProps)(SortRecommendations);