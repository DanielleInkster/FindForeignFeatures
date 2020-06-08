import React, { Component } from 'react';

class Genres extends Component {
  
    componentDidMount(){
        this.props.genreHandler(this.props.item.genre_ids)
    }

    render() {
        return (
            null
        )
    }
}

export default Genres
