import React, {Component} from 'react';
import Loading from '../../components/Loading'
import SelectKeywords from '../SelectKeywords';
import KeywordRecommendations from '../KeywordRecommendations';

const API_KEY = `${process.env.REACT_APP_DB_API_KEY}`

class Keywords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords:[],
            isFetching: this.props.isFetching,
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.isFetching !== prevProps.isFetching){
            this.findKeywordsFetch(this.props.movie.id)
        }
    }

    handleData = (data) => {
        if (data.keywords === null) {
            return []
        } else if (data.keywords.length < 4) {
            let arr = []
            data.keywords.forEach(entry => { arr.push(entry.id) })
            return arr
        } else {
            return data.keywords
        }
    }

    findKeywordsFetch = (value) => {
        fetch(`https://api.themoviedb.org/3/movie/${value}/keywords?api_key=${API_KEY}`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                this.setState({ keywords: this.handleData(data) })
                this.setState({ isFetching: false })
            })
    }

    handler = (results) => {
        this.setState({ keywords: results });
    }

    render(){
        return(
            <div>
                { this.state.isFetching === true && <Loading />}
                {this.state.keywords.length > 3 && <SelectKeywords keywords={this.state.keywords} handler={this.handler} /> }
                {this.state.isFetching === false && this.state.keywords.length < 4 && 
                <KeywordRecommendations keywords={this.state.keywords} rawKeywordHandler = {this.props.rawKeywordHandler}/> }
            </div>
        )
    }
}

export default Keywords