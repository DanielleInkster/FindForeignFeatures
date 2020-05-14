import React, {Component} from 'react';
import 'whatwg-fetch'
import Button from '../../components/Button';
import Input from '../../components/Input';
import SeriesList from '../../components/SeriesList'

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
        showing: true
    }
    }

    createFetch=(value)=>{
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}`+
            `&language=en-US&page=1&query=${Slugify(value)}&include_adult=false`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                this.setState({ series: data.results.slice(0, 3)})
            }) 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ inputValue: e.target.value })
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
            <div style={{ display: (showing ? 'block' : 'none') }}>
                <Input onChange={this.handleChange}/>
                <Button value="Search" onClick={this.handleSubmit.bind(this)} />
                {console.log(this.state.series)}
            </div>
                <SeriesList list={this.state.series} />
            </div>
        )
    };
    
}

export default Series;