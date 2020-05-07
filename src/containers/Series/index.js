import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList'


class Series extends Component{
    constructor(props) {
    super(props);

    this.state =  { series:[] }

    }

        componentDidUpdate(){
            fetch(`http://api.tvmaze.com/search/shows?q=${this.props.form}`)
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    this.setState({ series: data})
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