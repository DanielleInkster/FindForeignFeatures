import React, {Component} from 'react';
import 'whatwg-fetch'
import Button from '../../components/Button';
import Input from '../../components/Input';
import MoviesList from '../../components/MoviesList'
import Message from '../../components/Message'
import Loading from '../../components/Loading'

const API_KEY = `${process.env.REACT_APP_DB_API_KEY}`

function Slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           
        .replace(/[^\w\-]+/g, '')       
        .replace(/\-\-+/g, '-')         
        .replace(/^-+/, '')           
        .replace(/-+$/, '');            
}

class Movies extends Component{
    constructor(props) {
    super(props);
    this.state =  { 
        movies:[],
        inputValue:'',
        isFetching: false, 
        showing: true
        }
    }

    createMessage = ()=>{
        let type = ''
        this.props.type === 'tv' ? type = 'TV Series' : type ='Film'
        let input = ''
        if (this.state.movies.length === 0 && this.state.inputValue.trim() === ''){
            input = `Please enter the name of an English ${type} you enjoy.`
        } else if (this.state.isFetching === true) {
            input = "Searching..." 
        } else if (this.state.movies.length === 0 && this.state.inputValue.trim() !== '' && this.state.showing === false){
            input = "Movie not found."
        } else {
            input = ""
        }
        return input
    }

    createFetch=(value)=>{
        fetch(`https://api.themoviedb.org/3/search/${this.props.type}?api_key=${API_KEY}`+
            `&language=en-US&page=1&query=${Slugify(value)}&include_adult=false`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                data.results.forEach(movie => {
                    if (movie.original_language === "en") this.setState(previousState => ({
                        movies: [...previousState.movies, movie]
                    }) 
                    ) 
                    this.setState({ isFetching: false })
                })
            })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ inputValue: e.target.value })
        this.setState({ isFetching: true })
        this.createFetch(this.state.inputValue)
        this.setState({ showing: false })
    }

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }
    
    render() {
        const { showing } = this.state;
        return (
            <div>
                {this.state.isFetching===true && <Loading/>}
            <h1><Message text={this.createMessage()}/></h1>
            <div style={{ display: (showing ? 'block' : 'none') }}>
                <Input onChange={this.handleChange}/>
                <Button value="Search" onClick={this.handleSubmit.bind(this)} />
            </div>
                <MoviesList list={this.state.movies.slice(0,5)} handleResults={this.props.handleResults} handleFetchState={this.props.handleFetchState} />
            </div>
        )
    };
    
}

export default Movies;