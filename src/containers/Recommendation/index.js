import React, { Component } from 'react';
const API_KEY = `${process.env.REACT_APP_DB_API_KEY}`

class Recommmendation extends Component {
    constructor(props) {
        super(props);

        this.state = { genres: [],
                       rating: '',
                       keywords:[],
                         }

    }


    render() {
        return (
            <div>
                {this.props.data.name}
            </div>
        )
    };

}

export default Recommmendation;