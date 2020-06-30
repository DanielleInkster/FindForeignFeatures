// eslint-disable-next-line
import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as _ from "lodash";
import ISO6391 from 'iso-639-1';
import MoreInfoItem from '../../components/MoreInfoItem/Item';
import Loading from '../../components/Assets/Loading';
import 'whatwg-fetch'

class MoreInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            url: ''
        }
    }

    async componentDidMount(){ 
        console.log('mounted')   
         this.fetchMissingData(this.props.match.params.mediaType, this.props.match.params.recId) 
       window.scrollTo(0, 0)
    }

    componentDidUpdate(prevProps) {
        let year = this.findYear()
        if (this.props.tmdb_info.length !== 0 && this.props.omdb_info.length===0) { this.createFetch(year)}
    }

    searchTerm(title){
        return title.toString().toLowerCase().replace(/\s+/g, '+')
    }

    slugify=(text)=> {
        let input = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        let title = input.toString().toLowerCase()
            .replace(/[,¿¡:.]/, '')
            .replace(/[?]/, '')
            .replace(/!/, '') 
            .replace(/æ/, 'ae')
            .replace(/œ/, 'oe')
            .replace(/\s+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '')
            .replace(/[^\x00-\x7F]/g, "");
       return title.length > 0 ?  title : 'InvalidSearchTitle'
    }

    findYear() {
        let searchTerm = this.props.match.params.mediaType === 'tv' ? "first_air_date" : "release_date"
        let year = (this.props.more_info.hasOwnProperty(searchTerm) && this.props.more_info[searchTerm] !== "") ?
            this.props.more_info[searchTerm].slice(0, 4) : "[Unknown]" 
        return year
    }

    fetchMissingData(mediaType, itemId){
        console.log('missingdata')
        fetch(`/fetchTMDBInfo/${mediaType}/${itemId}`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                this.props.storeTmdbInfo(data)
        })
    }

    createFetch = (year) => {
        console.log('first fetch')
        let title = this.props.match.params.mediaType === 'tv' ? 
            this.slugify(this.props.tmdb_info.name) : this.slugify(this.props.tmdb_info.title)
        fetch(`/fetchMoreInfo/${title}/${year}`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                if (data.Response === "True" && this.compareLanguage(data) === true) {
                    this.setOmdb(data)
                } else {
                    this.secondFetch(year)
                }   
        })
    }

    secondFetch = (year) => {
        console.log('second fetch')
        let title = this.props.match.params.mediaType === 'tv' ? 
            this.slugify(this.props.tmdb_info.original_name) : this.slugify(this.props.tmdb_info.original_title)
        fetch(`/fetchMoreInfo/${title}/${year}`)
            .then((response) => {
                return response.json();   
            }).then((data) => {
                if(data.Response === "True" && this.compareLanguage(data)===true){
                   this.setOmdb(data)
                } else {
                    let response = 0
                    this.setOmdb(response)
                }           
            })
    }

    setOmdb=(data)=>{
        this.props.storeOmdbInfo(data)
        let url = this.createSearchURL(data)
        this.setState({ url: url })
        this.setState({ isFetching: false })
    }

    compareLanguage=(data)=>{
        let lang1 = this.props.tmdb_info.original_language === "cn" || this.props.tmdb_info.original_language === "zh" ? 
            ["Chinese", "Cantonese", "Mandarin", "MinNan"] : ISO6391.getName(this.props.tmdb_info.original_language)
        let lang2 = data.Language.replace(/\s+/g, '').split(',')
        const result = _.intersection(lang1, lang2);
        return lang1 === lang2|| lang2.includes(lang1) || result.length > 0 ? true : false
    }

    createSearchURL = (data) => {
        let title = this.props.match.params.mediaType === 'tv' ?
            this.searchTerm(this.props.tmdb_info.name) : this.searchTerm(this.props.tmdb_info.title)
        let year = this.findYear()
        if(data.imdbID !== undefined){
            return `https://www.imdb.com/title/${data.imdbID}`
        } else if (this.props.tmdbInfo.imdb_id !== undefined && this.props.tmdb_info.imdb_id !== null){
            return `https://www.imdb.com/title/${this.props.tmdb_info.imdb_id}`
        } else {
            return `https://www.imdb.com/find?q=${title}+${year}&ref_=nv_sr_sm`
        }
    }

    render() {
        return (
            <div>
                {this.state.isFetching === true &&<Loading/>}
                {this.state.isFetching===true &&
                <span id="wow">Loading...</span>
                }
                {this.state.isFetching === false &&
                    <MoreInfoItem type={this.props.match.params.mediaType}
                        url={this.state.url} history={this.props.history} />
                }
            </div>
        ) 
    };
}

const mapStateToProps = (state) => {
    return {
        more_info: state.more_info,
        tmdb_info: state.tmdb_info,
        omdb_info: state.omdb_info
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        storeTmdbInfo: (data) => dispatch({ type: 'TMDB_INFO', val: data }),
        storeOmdbInfo: (data)=> dispatch({type: 'OMDB_INFO', val: data})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoreInfo);