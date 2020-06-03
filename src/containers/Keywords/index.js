import React, {Component} from 'react';
import SelectKeywords from '../SelectKeywords';
import KeywordRecommendations from '../KeywordRecommendations';

const API_KEY = `${process.env.REACT_APP_DB_API_KEY}`

class Keywords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords:[],
            selection:[],
            id: 0,
            mediaType: '',
            isFetching: this.props.isFetching,
        }
    }

    componentDidMount(){
        this.setState({ mediaType: this.props.location.state.type})
        this.setState({ selection: this.props.location.state.selection })
        this.setState({ id: this.props.location.state.selection.id })
        let term = this.determineType(this.props.location.state.type)
        this.findKeywordsFetch(this.props.location.state.type, this.props.location.state.selection.id, term )
    } 
    

    determineType=(type)=>{
        let searchTerm = type === 'tv' ?  'results' :  'keywords'
        return searchTerm
    }

    handleData = (data) => {
        if (data=== null) {
            return []
        } else if (data.length < 4) {
            let arr = []
            data.forEach(entry => {arr.push(entry.id) })
            return arr
        } else {
            return data
        }
    }

    findKeywordsFetch = (type, id, searchTerm) => {
        fetch(`https://api.themoviedb.org/3/${type}/${id}/keywords?api_key=${API_KEY}`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                data[searchTerm].length > 0 ? this.setState({ keywords: this.handleData(data[searchTerm]) }) : this.props.rawKeywordHandler([])
                this.setState({ isFetching: false })
        })
    }

    redirect(to, keywords, handler, mediaType) {
        this.props.history.push({ pathname: to, keywords, handler, mediaType })
    }

    handler = (results) => {
        this.setState({ keywords: results });
    }


    render(){
        return(
            <div>
                {console.log(this.state.keywords)}
                {this.state.keywords.length >= 4 && this.redirect(`/${this.state.mediaType}/${this.state.id}/keywords`,
                this.state.keywords, this.handler, this.state.mediaType) 
                }

                {this.state.isFetching === false && this.state.keywords.length < 4 &&  
                    <KeywordRecommendations keywords={this.state.keywords} rawKeywordHandler={this.props.rawKeywordHandler}
                    isLoading={this.props.isLoading} handleLoadState={this.props.handleLoadState} type={this.props.type} /> 
                }
            </div>
        )
    }
}

export default Keywords