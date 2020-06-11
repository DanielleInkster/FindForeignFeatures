import React, {Component} from 'react';

const API_KEY = `${process.env.REACT_APP_DB_API_KEY}`

class Keywords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords:[],
            selection:[],
            fetchRun: false,
        }
    }

    componentDidMount(){
        let term = this.determineType(this.props.item.match.params.mediaType)
        this.findKeywordsFetch(this.props.item.match.params.mediaType, this.props.item.match.params.id , term )
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
                //mutates state?
                data[searchTerm].length !== 0 ? this.setState({ keywords: this.handleData(data[searchTerm]) }) : this.noResults()
                this.setState({ fetchRun: true })
        })
    }

    redirect(to, keywords, selection) {
        this.props.item.history.push({ pathname: to, keywords, selection })
        this.setState({ fetchRun: false })
    }
    
    noResults(){
        this.redirect(`/${this.props.item.match.params.mediaType}/${this.props.item.match.params.id}/noresults`)
    }

    render(){
        return(
            <div>

                {this.state.keywords.length >= 4 && 
                this.redirect(`/${this.props.item.match.params.mediaType}/${this.props.item.match.params.id}/search/keywords`,
                    this.state.keywords, this.props.item.location.state.selection)
                }

                {this.state.fetchRun === true && 0 < this.state.keywords.length < 4 &&  
                    this.redirect(`/${this.props.item.match.params.mediaType}/${this.props.item.match.params.id}/search`,
                        this.state.keywords, this.props.item.location.state.selection)  
                }

            </div>
        )
    }
}


export default Keywords