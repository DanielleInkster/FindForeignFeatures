import React, { Component } from 'react';
const API_KEY = `${process.env.REACT_APP_DB_API_KEY}`

class Recommmendation extends Component {
    constructor(props) {
        super(props);

        this.state = { genres: [this.props.data.genre_ids],
                       rating: this.props.data.vote_average,
                       keywords:[],
                         }

    }

    componentDidUpdate() {
        fetch(`https://api.themoviedb.org/3/tv/${this.props.data.id}/keywords?api_key=${API_KEY}`) 
            .then((response) => {
                return response.json();
            }).then((data) => {
                    console.log(data.results)
                    this.setState({ keywords: data.results.slice(0, 3) })
                })
            }
    


    render() {
        return (
            <div>
               Hello
            </div>
        )
    };

}

export default Recommmendation;