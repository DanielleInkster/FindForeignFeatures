import React, {Component} from 'react';
import 'whatwg-fetch'
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

    this.state =  { series:[] }

    }

    componentDidUpdate(){
        if (this.state.series !== null && this.state.series.length === 0){
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}`+
            `&language=en-US&page=1&query=${Slugify(this.props.form)}&include_adult=false`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                if(data.results.length>0){
                    this.setState({ series: data.results.slice(0, 3)})
                } else {
                    this.setState({ series: null})
                } 
            })
            console.log("Series title submitted")
        }
            
    }
    
    render() {
        return (
            <div>   
                <br/>
                <SeriesList list = {this.state.series}/>
            </div>
        )
    };
    
}

export default Series;