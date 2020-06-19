import React, { Component } from 'react';
import { connect } from 'react-redux'
import Loading from '../../components/Assets/Loading';
import Message from '../../components/Assets/Message';
import KeywordRecommendations from '../KeywordRecommendations';
import Genres from '../Genres';
import Compare from '../Compare';
import SortRecommendations from '../SortRecommendations';

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
        if (this.state.keywords.length === 0 && this.props.location.keywords !== undefined) {
            this.setState({ keywords: this.props.location.keywords })
        }
        window.scrollTo(0, 0)
    }

    redirect(to, recommendations) {
        this.props.history.push({ pathname: to, recommendations })
    }

    noResults() {
        this.redirect(`/${this.props.match.params.mediaType}/${this.props.match.params.id}/noresults`)
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

    searching(input, input2) {
        if (this.state.keywords.length > 0) {
            return (
                <div>
                    <Loading />
                    <h2><Message text={input} /></h2>
                    <Message text={input2} />
                </div>
            )
        }
    }

    render() {

        let input = "<div id='wow'>Searching...</div>"
        let input2 = "<div id = 'text'>This can take up to 10 seconds.</div>"

        return (
            <div>
                {this.state.keywords.length !== 0 &&
                    this.searching(input, input2)}

                {this.state.keywords.length !== 0 && this.state.rawKeywordRecommendations.length === 0 &&
                    <KeywordRecommendations keywords={this.state.keywords} type={this.props.match.params.mediaType} 
                        rawKeywordHandler={this.rawKeywordHandler}/>  
                }
                {this.props.selection.length !== 0 && this.state.genres.length === 0 &&
                    <Genres item={this.props.selection} genreHandler={this.genreHandler}/>
                }
                {this.state.rawKeywordRecommendations.length !== 0 && this.state.genres.length !== 0 &&
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