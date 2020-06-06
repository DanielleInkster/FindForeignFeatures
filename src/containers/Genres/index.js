import React, { Component } from 'react';
import Compare from '../Compare';

class Genres extends Component {
  
    componentDidMount(){
        this.props.genreHandler([this.props.item.genre_ids])
    }

    render() {
        return (
            null
        )
    }
}

export default Genres

{/* <Compare genres={this.state.genres} comparedHandler={this.props.comparedHandler} keywordRecs={this.props.keywordRecs} /> */ }