import React, {Component} from 'react';
const API_KEY = `${process.env.REACT_APP_DB_API_KEY}`

class KeywordRecommendations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rawKeywordRecommendations: [],
            keywords: []
        }
    }

    createFetch =(props)=>{
        this.props.keywords.forEach(num =>{ 
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&`+
        `sort_by=popularity.desc&include_adult=false&include_video=false&with_keywords=${num}`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                let i;
                let page = data.total_pages < 5 ? data.total_pages : 5
                for (i = 1; i < page ; i++) {
                    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&` +
                        `sort_by=popularity.desc&include_adult=false&include_video=false&page=${data.total_pages }&with_keywords=${num}`)
                    .then((response) => {
                        return response.json();
                    }).then((data) => {
                        data.results.forEach(movie => {
                            if (movie.original_language !== "en") this.setState({ rawKeywordRecommendations: [...this.state.rawKeywordRecommendations, movie] })
                        console.log(this.state.rawKeywordRecommendations)
                    })
                    })
                }
            })
        })
    }

    render(){
        return(
            <div>{this.props.keywords.length >0 && this.state.rawKeywordRecommendations.length ===0 &&
                this.createFetch()}</div>
        )
    }
}

export default KeywordRecommendations;