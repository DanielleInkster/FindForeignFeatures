import React, { Component } from 'react';
import * as _ from "lodash";
import ISO6391 from 'iso-639-1';
import MoreInfoItem from '../../components/MoreInfoItem';

import 'whatwg-fetch'

const API_KEY2 = `${process.env.REACT_APP_DB_API_KEY2}`

class MoreInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tmdbInfo:[],
            omdbInfo:[]
        }
    }

    componentDidMount(){
        this.setState({ tmdbInfo: this.props.location.item })
        let year = this.findYear()
        this.createFetch(year)
    }

    
    slugify(text) {
        let input = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        return input.toString().toLowerCase()
            .replace(/œ/, 'oe')
            .replace(/\s+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    }

    findYear() {
        let searchTerm = this.props.location.type === 'tv' ? "first_air_date" : "release_date"

        let year = (this.props.location.item.hasOwnProperty(searchTerm) && this.props.location.item[searchTerm] !== "") ?
            this.props.location.item[searchTerm].slice(0, 4) : "[Unknown]" 

        return year
    }

    createFetch = (year) => {
        let firstTitle = this.props.location.type === 'tv' ? 
        this.slugify(this.props.location.item.name) : this.slugify(this.props.location.item.title)
    
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY2}&t=${firstTitle}&y=${year}&plot=full`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                (data.Response === "True" && this.compareLanguage(data)===true) ? this.setState({ omdbInfo: data}) : this.secondFetch(year)  
        })
    }

    secondFetch = (year) => {
        let secondTitle = this.props.location.type === 'tv' ? 
        this.slugify(this.props.location.item.original_name) : this.slugify(this.props.location.item.original_title)

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY2}&t=${secondTitle}&y=${year}&plot=full`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                (data.Response === "True" && this.compareLanguage(data)===true) ? this.setState({ omdbInfo: data }) : this.setState({ omdbInfo: 0 })            
        })
    }

    compareLanguage=(data)=>{
        let lang1 = this.state.tmdbInfo.original_language === "cn" || this.state.tmdbInfo.original_language === "zh" ? 
            ["Chinese", "Cantonese", "Mandarin", "MinNan"] : ISO6391.getName(this.state.tmdbInfo.original_language)
        let lang2 = data.Language.replace(/\s+/g, '').split(',')
        const result = _.intersection(lang1, lang2);
        return lang1 === lang2|| lang2.includes(lang1) || result.length > 0 ? true : false
    }
  

    render() {
       
        return (
            <div>
                {this.state.omdbInfo.length !== 0 &&
                    <MoreInfoItem tmdb={this.state.tmdbInfo} omdb={this.state.omdbInfo} type={this.props.location.type} />
            }
            </div>
        )
    };

}


export default MoreInfo;