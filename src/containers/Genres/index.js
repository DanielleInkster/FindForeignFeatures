import React, { Component } from 'react';
import GenreRecommendations from '../GenreRecommendations';

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
            this.getGenreIDString (this.props.movie)
        }
    }

    getGenreIDString = (movie) => {
        this.setState({ genres: movie.genre_ids})
    }

    render() {
        return (
            <GenreRecommendations genres={this.state.genres} rawGenreHandler={this.props.rawGenreHandler}/>
        )
    }
}

export default Genres