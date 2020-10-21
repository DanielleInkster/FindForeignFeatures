// eslint-disable-next-line
import React, { Component } from 'react';

class Genres extends Component {
  
    async componentDidMount(){
        if (this.props.item.genre_ids !== undefined){
        this.props.genreHandler(this.props.item.genre_ids)
        } else {
            let ids = await this.getIds()
            this.props.genreHandler(ids)
            
        }
    }

    getIds = ()=>{
        let arr =[]
        this.props.item.genres.forEach(entry => {
            arr.push(entry.id)
        })
        return arr
    }

    render() {
        return (
            null
        )
    }
}

export default Genres
