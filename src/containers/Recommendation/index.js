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
        console.log(`Gathered Data for ${this.props.data}`)
    }
    


    render() {
        return (
            null
        )
    };

}

export default Recommmendation;