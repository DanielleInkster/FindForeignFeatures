import React, {Component} from 'react';
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

    componentDidMount(){
        console.log(this.props.location.state)
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

    findKeywordsFetch = (value, searchTerm) => {
        fetch(`https://api.themoviedb.org/3/${this.props.type}/${value}/keywords?api_key=${API_KEY}`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                data[searchTerm].length > 0 ? this.setState({ keywords: this.handleData(data[searchTerm]) }) : this.props.rawKeywordHandler([])
                this.setState({ isFetching: false })
        })
    }

    handler = (results) => {
        this.setState({ keywords: results });
    }


    render(){
        return(
            <div>
                {this.state.keywords.length >= 4 && 
                    <SelectKeywords keywords={this.state.keywords} handler={this.handler} type={this.props.type} /> 
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