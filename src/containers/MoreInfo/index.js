import React, { Component } from 'react';
import 'whatwg-fetch'

const API_KEY2 = `${process.env.REACT_APP_DB_API_KEY2}`

class MoreInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selection:[]
        }
    }

    componentDidMount(){
        let title = this.props.location.type==='tv' ? this.chooseTVTitle(): this.chooseMovieTitle()
        let r_a_title = this.slugify(title)
        let year = this.findYear()
        this.createFetch(r_a_title, year)
    }

    slugify(text) {
    let input = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return input.toString().toLowerCase()
        .replace(/œ/, 'oe')
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

    chooseMovieTitle(){
       if(/[a-z]/i.test(this.props.location.item.original_title)=== true){
           return this.props.location.item.original_title
       } else{
           return this.props.location.item.title
       }
    }

    chooseTVTitle() {
        if (/[a-z]/i.test(this.props.location.item.original_name) === true) {
            return this.props.location.item.original_name
        } else {
            return this.props.location.item.name
        }
    }

    findYear() {
        let searchTerm = this.props.location.type === 'tv' ? "first_air_date" : "release_date"

        let year = (this.props.location.item.hasOwnProperty(searchTerm) && this.props.location.item[searchTerm] !== "") ?
            this.props.location.item[searchTerm].slice(0, 4) : "[Unknown]" 
        
        return year
    }

    createFetch = (r_a_title, year) => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY2}&t=${r_a_title}&y=${year}&plot=full`)
            .then((response) => {
                return response.json();
            }).then((data) => {
               (data.Response==="True") ? this.setState({selection: data}) : this.secondFetch(year)
                   console.log('first fetch run')
               
        })

    }

    secondFetch = (year) => {
        let secondTitle = this.props.location.type === 'tv' ? this.props.location.item.name :  this.props.location.item.title
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY2}&t=${secondTitle}&y=${year}&plot=full`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                (data.Response === "True") ? this.setState({ selection: data }) : console.log('booooooo!')  
                console.log('second fetch run') 
                console.log(data)            
        })

    }
  


    render() {
       
        return (
            <div className='body'>
                HELLO FROM HELL
            </div>
        )
    };

}


export default MoreInfo;