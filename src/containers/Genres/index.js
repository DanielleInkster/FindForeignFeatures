import React, { Component } from 'react';
import Compare from '../Compare';

class Genres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genres: [],
            isFetching: this.props.isFetching,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.isFetching !== prevProps.isFetching) {
            this.getGenreIDString(this.props.item)
        }
    }

    getGenreIDString = (item) => {
        this.setState({ genres: item.genre_ids})
    }

    render() {
        return (
            <Compare genres={this.state.genres} comparedHandler={this.props.comparedHandler} keywordRecs={this.props.keywordRecs} />
        )
    }
}

export default Genres