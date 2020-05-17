import React, { Component } from 'react';
const API_KEY = `${process.env.REACT_APP_DB_API_KEY}`

class GenreRecommendations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rawGenreRecommendations: [],
        }
    }
    

    createGenreFetch = () => {
        this.props.genres.forEach(num => {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${num}`)
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    let i;
                    let pages = data.total_pages < 100 ? data.total_pages : 100
                    for (i = 1; i <= pages; i++) {
                        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${i}&with_genres=${num}`)
                            .then((response) => {
                                return response.json();
                            }).then((data) => {
                                data.results.forEach(movie => {
                                    if (movie.original_language !== "en") this.setState(previousState => ({
                                        rawGenreRecommendations: [...previousState.rawGenreRecommendations, movie]
                                    }))
                                })
                            })
                    }
                })
        })
    }

        
             
    getRecommendations() {
        this.props.rawGenreHandler(this.state.rawGenreRecommendations)
    }

    returnRecommendations() {
        this.createGenreFetch()
        setTimeout(() => { this.getRecommendations() }, 3000);
    }

    render() {
        return (
            <div>
                {this.props.genres.length !==0 && this.state.rawGenreRecommendations.length === 0 &&
                    this.returnRecommendations()}
            </div>
        )
    }
}

export default GenreRecommendations;