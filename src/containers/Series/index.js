import React, {Component} from 'react';
import 'whatwg-fetch'
import SeriesList from '../../components/SeriesList'

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}


class Series extends Component{
    constructor(props) {
    super(props);

    this.state =  { series:[] }

    }

    componentDidUpdate(){
        console.log(slugify(this.props.form))
        fetch(`http://api.tvmaze.com/search/shows?q=${slugify(this.props.form)}`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                this.setState({ series: data.slice(0, 3)})
            })
            
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