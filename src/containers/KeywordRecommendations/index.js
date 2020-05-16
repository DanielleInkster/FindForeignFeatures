import React, {Component} from 'react';
const API_KEY = `${process.env.REACT_APP_DB_API_KEY}`

class KeywordRecommendations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rawKeywordRecommendations: [],
        }
    }

    createKeywordFetch =()=>{ 
        this.props.keywords.forEach(num =>{ 
            fetch(`https://api.themoviedb.org/3/keyword/${num}/movies?api_key=${API_KEY}`+
            `&language=en-US&include_adult=false`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                let i;
                let pages = data.total_pages < 20 ? data.total_pages : 20
                for (i = 1; i <= pages; i++) {
                    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&` +
                        `sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}&with_keywords=${num}`)
                    .then((response) => {
                        return response.json();
                    }).then((data) => {
                        data.results.forEach(movie => {
                            if (movie.original_language !== "en") this.setState(previousState => ({
                                rawKeywordRecommendations: [...previousState.rawKeywordRecommendations, movie]
                            }))
                         })
                    })
                }
            })
        })
    }

    getRecommendations(){
        this.props.rawKeywordHandler(this.state.rawKeywordRecommendations)
    }

    returnRecommendations(){
        this.createKeywordFetch()
        setTimeout(() => {this.getRecommendations()}, 1500);
    }

    render(){
        return(
            <div>
                {this.props.keywords.length > 0 && this.state.rawKeywordRecommendations.length === 0 &&
                this.returnRecommendations()
                }
                {console.log(this.state.rawKeywordRecommendations.length)}
            </div>
        )
    }
}

export default KeywordRecommendations;