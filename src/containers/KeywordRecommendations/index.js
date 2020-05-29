import React, {Component} from 'react';
import Message from '../../components/Message';
import Loading from '../../components/Loading';
const API_KEY = `${process.env.REACT_APP_DB_API_KEY}`

class KeywordRecommendations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rawKeywordRecommendations: [],
        }
    }

    componentDidMount() {
        this.props.handleLoadState(true)
    }

    fetchKeywordRecs=(data, num)=>{
        let i;
        let pages = data.total_pages < 100 ? data.total_pages : 100
        for (i = 1; i <= pages; i++) {
            fetch(`https://api.themoviedb.org/3/discover/${this.props.type}?api_key=${API_KEY}&language=en-US&` +
                `sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}&with_keywords=${num}`)
                .then((response) => {
                    return response.json();
                }).then((data) => {
                   this.pushKeywordRecs(data)
                })
        }
    }

    pushKeywordRecs=(data)=>{
        data.results.forEach(movie => {
            if (movie.original_language !== "en") this.setState(previousState => ({
                rawKeywordRecommendations: [...previousState.rawKeywordRecommendations, movie]
            }))
        })
    }

    createKeywordFetch =(value )=>{ 
        value.forEach(num =>{ 
            fetch(`https://api.themoviedb.org/3/keyword/${num}/${this.props.type}?api_key=${API_KEY}`+
            `&language=en-US&include_adult=false`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                this.fetchKeywordRecs(data,num)
            })
        })
    }

    getRecommendations(){
        this.props.rawKeywordHandler(this.state.rawKeywordRecommendations)
    }

    returnRecommendations(){
        if (this.props.keywords.length > 0 && this.state.rawKeywordRecommendations.length === 0 ){
        this.createKeywordFetch(this.props.keywords)
        setTimeout(() => {this.getRecommendations()}, 2500);
        }
    }

    searchReturn(input, input2){
        if(this.props.keywords.length > 0 && this.state.rawKeywordRecommendations.length !== 0 &&
            this.props.isLoading){
                return(
                    <div>
                        <Loading />
                        <h2><Message text={input} /></h2>
                        <p><Message text={input2} /></p>
                    </div>
                )
            }
    }

    render(){
        let input  = "<div id='wow'>Searching...</div>"
        let input2 = "<div id = 'text'>This can take up to 10 seconds.</div>"
        return(
            <div>
                {this.returnRecommendations()}
                {this.searchReturn(input, input2)}
            </div>
        )
    }
}

export default KeywordRecommendations;