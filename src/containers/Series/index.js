import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList'
import ReactHtmlParser from 'react-html-parser'; 

class Series extends Component{
    
        state = {
            image: [],
            series: [],
            rating: []
        }
        componentDidMount(){
            fetch('http://api.tvmaze.com/search/shows?q=steven-universe')
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    this.setState({ image: data[0].show.image.medium })
                    this.setState({ series: data[0].show.summary })
                    this.setState({ rating: data[0].show.rating.average })
                })
        }
    render() {
        return (
            <div>   
                <br/>
                <img src={this.state.image}/>
                <br/>
                Summary: {ReactHtmlParser(this.state.series)}
                Rating: <b>{ReactHtmlParser(this.state.rating)}</b>

                <SeriesList />
            </div>
        )
    };
}

export default Series;