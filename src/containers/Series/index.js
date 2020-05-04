import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser'; 

class Series extends Component{
    
        state = {
            image: [],
            series: []
        }
        componentDidMount(){
            fetch('http://api.tvmaze.com/search/shows?q=steven-universe')
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    this.setState({ series: data[0].show.summary })
                    this.setState({ rating: data[0].show.rating.average })
                })
        }
    render() {
        return (
            <div>   
                {ReactHtmlParser(this.state.series)}
                {ReactHtmlParser(this.state.rating)}
            </div>
        )
    };
}

export default Series;