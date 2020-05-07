import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList'


class Series extends Component{
    constructor(props) {
    super(props);

    this.state =  { series:[] }

    }

        componentDidMount(){
            console.log(this.props.form)
            fetch('http://api.tvmaze.com/search/shows?q=steven-universe')
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    this.setState({ series: data})
                })
        }
    render() {
        return (
            <div>   
                {this.props.form}
                <br/>
                <SeriesList list = {this.state.series}/>
            </div>
        )
    };
    
}

export default Series;