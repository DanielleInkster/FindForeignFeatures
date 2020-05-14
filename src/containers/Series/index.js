import React, {Component} from 'react';
import 'whatwg-fetch'
import Button from '../../components/Button';
import Input from '../../components/Input';
import SeriesList from '../../components/SeriesList'
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

class Series extends Component{
    constructor(props) {
    super(props);
    this.state =  { 
        series:[],
        inputValue:'',
        isFetching: false, 
        showing: true
        }
    }

    createMessage = ()=>{
        let input = ''
        if(this.state.series.length === 0 && this.state.inputValue.trim() === ''){
            input = "Please enter the name of an English series you enjoy."
        } else if (this.state.isFetching === true) {
            input = "Loading..." 
        } else if (this.state.series.length === 0 && this.state.inputValue.trim() != '' && this.state.showing === false){
            input = "No series found."
        } else {
            input = ""
        }
        return input
    }

    createFetch=(value)=>{
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}`+
            `&language=en-US&page=1&query=${Slugify(value)}&include_adult=false`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                this.setState({ series: data.results.slice(0, 3)})
                this.setState({ isFetching: false })
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
                {this.state.isFetching && <Loading/>}
            <h1><Message text={this.createMessage()}/></h1>
            <div style={{ display: (showing ? 'block' : 'none') }}>
                <Input onChange={this.handleChange}/>
                <Button value="Search" onClick={this.handleSubmit.bind(this)} />
            </div>
                <SeriesList list={this.state.series} />
            </div>
        )
    };
    
}

export default Series;