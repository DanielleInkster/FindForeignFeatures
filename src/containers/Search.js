import React, { Component } from 'react';
import { connect } from 'react-redux'
import KeywordRecommendations from './KeywordRecommendations';
import Genres from './Genres';
import Compare from './Compare';
import SortRecommendations from './SortRecommendations';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: [],
            rawKeywordRecommendations: [],
            genres: [],
            comparedRecommendations: [],
        }
    }

    componentDidMount() {
        if (this.state.keywords.length === 0 && this.props.props.location.keywords !== undefined) {
            this.setState({ keywords: this.props.props.location.keywords })
        }
        window.scrollTo(0, 0)
    }

    redirect(to, recommendations) {
        this.props.props.history.push({ pathname: to, recommendations })
    }

    noResults() {
        this.redirect(`/${this.props.props.match.params.mediaType}/${this.props.props.match.params.id}/noresults`)
    }

    rawKeywordHandler = (results) => {
        results.length !== 0 ? this.setState({ rawKeywordRecommendations: results }) : this.noResults()
    }

    genreHandler = (results) => {
        this.setState({ genres: results })
    }

    comparedHandler = (results) => {
        results.length !== 0 ? this.setState({ comparedRecommendations: results }) : this.noResults()
    }

    render() {

        return (
            <div>
                {this.state.keywords.length !== 0 && this.state.rawKeywordRecommendations.length === 0 &&
                    <KeywordRecommendations keywords={this.state.keywords} type={this.props.props.match.params.mediaType} 
                        rawKeywordHandler={this.rawKeywordHandler}/>  
                }
                {this.props.selection !== '' && this.state.genres.length === 0 &&
                    <Genres item={this.props.selection} genreHandler={this.genreHandler}/>
                }
                {this.state.rawKeywordRecommendations.length !== 0 && this.state.genres.length !== 0  &&
                    <Compare genres={this.state.genres} keywordRecs={this.state.rawKeywordRecommendations} 
                        comparedHandler={this.comparedHandler} />
                }
                {this.state.comparedRecommendations.length !== 0 &&
                    <SortRecommendations comparedRecommendations = {this.state.comparedRecommendations} info = {this.props} />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selection: state.selection,
        allKeywords: state.allKeywords
    }
}

export default connect(mapStateToProps, null)(Search)