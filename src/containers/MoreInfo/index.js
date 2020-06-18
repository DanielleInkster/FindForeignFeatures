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
            omdbInfo:[],
            url: ''
        }
    }

    componentDidMount(){
        this.setState({ tmdbInfo: this.props.location.item })
        let year = this.findYear()
        if (this.state.omdbInfo.length ===0) this.createFetch(year)
    }

    searchTerm(title){
        return title.toString().toLowerCase().replace(/\s+/g, '+')
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
                if (data.Response === "True" && this.compareLanguage(data) === true) {
                    this.setState({ omdbInfo: data })
                    let url = this.createSpecificURL(data)
                    this.setState({ url: url })
                } else {
                    this.secondFetch(year)
                }   
        })
    }

    secondFetch = (year) => {
        let secondTitle = this.props.location.type === 'tv' ? 
        this.slugify(this.props.location.item.original_name) : this.slugify(this.props.location.item.original_title)

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY2}&t=${secondTitle}&y=${year}&plot=full`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                if(data.Response === "True" && this.compareLanguage(data)===true){
                    this.setState({ omdbInfo: data })
                    let url = this.createSpecificURL(data) 
                    this.setState({ url: url })
                } else {
                     this.setState({ omdbInfo: 0 }) 
                    let url = this.createSearchURL()
                    this.setState({ url: url })
                }           
        })
    }

    compareLanguage=(data)=>{
        let lang1 = this.state.tmdbInfo.original_language === "cn" || this.state.tmdbInfo.original_language === "zh" ? 
            ["Chinese", "Cantonese", "Mandarin", "MinNan"] : ISO6391.getName(this.state.tmdbInfo.original_language)
        let lang2 = data.Language.replace(/\s+/g, '').split(',')
        const result = _.intersection(lang1, lang2);
        return lang1 === lang2|| lang2.includes(lang1) || result.length > 0 ? true : false
    }

    createSpecificURL(data){
        let url = `https://www.imdb.com/title/${data.imdbID}`
        return url
    }

    createSearchURL=()=>{
        let title = this.props.location.type === 'tv' ?
            this.searchTerm(this.props.location.item.name) : this.searchTerm(this.props.location.item.title)
        let year = this.findYear()
        return `https://www.imdb.com/find?q=${title}+${year}&ref_=nv_sr_sm`
    }

    render() {
       
        return (
            <div>
                {this.state.omdbInfo.length !== 0 &&
                    <MoreInfoItem tmdb={this.state.tmdbInfo} omdb={this.state.omdbInfo} type={this.props.location.type}
                                url = {this.state.url} />
            }
            </div>
        )
    };

}


export default MoreInfo;