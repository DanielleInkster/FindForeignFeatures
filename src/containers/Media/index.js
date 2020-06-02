import React, {Component} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'whatwg-fetch'
import Button from '../../components/Button';
import Input from '../../components/Input';
import MediaList from '../../components/MediaList'
import Message from '../../components/Message'
import Loading from '../../components/Loading'

const API_KEY = `${process.env.REACT_APP_DB_API_KEY}`

class Media extends Component{
    constructor(props, { match }) {
    super(props);
    this.state =  { 
        options:[],
        inputValue:'',
        mediaType: '',
        isFetching: false, 
        showing: true
        }
    }

    componentDidMount(){
        this.setState({ mediaType: this.props.match.params.mediaType})
    }

    determineType = (mediaType) => {
        let searchTerm = mediaType === 'tv' ? 'TV series' : 'film'
        return searchTerm
    }

    createMessage = (mediaType)=>{
        let input = ""
        let type = this.determineType(mediaType)
        if (this.state.options.length === 0 && this.state.inputValue.trim() === ''){
            input = `Please enter the name of an English ${type} you enjoy.`
        } else if (this.state.isFetching === true) {
            input = "<div id = 'wow'>Searching...</div>" 
        } else if (this.state.options.length === 0 && this.state.inputValue.trim() !== '' && this.state.showing === false){
            input = "No results found."
        } else {
            input = ""
        }
        return input
    }

    createFetch=(value)=>{
        fetch(`https://api.themoviedb.org/3/search/${this.state.mediaType}?api_key=${API_KEY}`+
            `&language=en-US&page=1&query=${value}&include_adult=false`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                data.results.forEach(item => {
                    if (item.original_language === "en") this.setState(previousState => ({
                        options: [...previousState.options, item]
                    }) 
                ) 
            })
        })

    }

    searchForMedia=(data)=>{
        this.setState({ isFetching: true })
        this.createFetch(data)
        this.setState({ showing: false })
    }

    redirect(to, list, mediaType) {
        this.props.history.push({ pathname: to, list, mediaType })
    }

    handleSubmit = (e) => {
        if (this.state.inputValue.trim() === '') {
            alert("Please enter a title.")
        } else {
            this.searchForMedia(this.state.inputValue)
            setTimeout(() => { this.redirect(`/${this.state.mediaType}/search?title=${this.state.inputValue}`,  
                               this.state.options.slice(0,6), this.state.mediaType) }, 500)
        }
    }

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }
    
    render() {
        const { showing } = this.state;
        return (
            <div className = 'body'>
                    {this.state.isFetching===true && <Loading/>}
                <div id = 'heading'><Message text={this.createMessage(this.state.mediaType)}/></div>
                    <br/>
                <div style={{ display: (showing ? 'block' : 'none') }}>
                    <Input onChange={this.handleChange}/>
                    <Button value="Search" onClick={this.handleSubmit}/>
                </div>
            </div>
        )
    };
    
}

export default Media;