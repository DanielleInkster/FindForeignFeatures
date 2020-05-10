import React, { Component } from 'react';
import GatherRecommendations from '../GatherRecommendations';
const API_KEY = `${process.env.REACT_APP_DB_API_KEY}`

class GatherData extends Component {
    constructor(props) {
        super(props);

        this.state = { 
                       seriesSelection: [],
                       genres: [],
                       rating: '',
                       keywords: [0],
                    }

    }

    componentDidUpdate() {
        if (Number.isInteger(this.props.data.id) && this.state.keywords[0]===0){
        fetch(`https://api.themoviedb.org/3/tv/${this.props.data.id}/keywords?api_key=${API_KEY}`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                this.setState({ keywords: data.results })
                this.setState({ seriesSelection: this.props.data })
                this.setState({ rating: this.props.data.vote_average })
                this.setState({ genres: this.props.data.genre_ids })
            })
            console.log("Series data gathered")
        }

    }
    
    render() {
        return (
            <GatherRecommendations data={this.state} />
        )
    };

}

export default GatherData;