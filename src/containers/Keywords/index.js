import React, { Component } from 'react';
import { connect } from 'react-redux'



class Keywords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            fetchRun: false,
        }
    }

    componentDidMount() {
        let term = this.determineType(this.props.match.params.mediaType)
        this.findKeywordsFetch(this.props.match.params.mediaType, this.props.match.params.id, term)
    }

    determineType = (type) => {
        let searchTerm = type === 'tv' ? 'results' : 'keywords'
        return searchTerm
    }

    handleData = (data) => {
        if (data === null) {
            return []
        } else if (data.length < 4) {
            let arr = []
            data.forEach(entry => { arr.push(entry.id) })
            return arr
        } else {
            return data
        }
    }

    findKeywordsFetch = (mediaType, id, searchTerm) => {
        fetch(`/fetchKeywords/${mediaType}/${id}`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                let arr = []
                this.setState({ amount: data[searchTerm].length })
                data[searchTerm].length !== 0 ? arr.push(this.handleData(data[searchTerm])) : this.noResults()
                this.props.storeKeywords(arr)
                this.setState({ fetchRun: true })
            })
    }

    redirect(to, keywords) {
        this.props.history.push({ pathname: to, keywords })
        this.setState({ fetchRun: false })
    }

    noResults() {
        this.redirect(`/${this.props.match.params.mediaType}/${this.props.match.params.id}/noresults`)
    }

    render() {
        return (
            <div>
                {this.state.amount >= 4 &&
                    this.redirect(`/${this.props.match.params.mediaType}/${this.props.match.params.id}/search/keywords`)
                }

                {this.state.fetchRun === true && 0 < this.state.amount < 4 &&
                    this.redirect(`/${this.props.match.params.mediaType}/${this.props.match.params.id}/search`,
                    this.props.allKeywords)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allKeywords: state.allKeywords
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeKeywords: (list) => dispatch({ type: 'KEYWORDS', val: list })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Keywords)