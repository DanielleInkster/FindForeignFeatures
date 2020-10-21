// eslint-disable-next-line
import React, { Component } from 'react';
import * as _ from "lodash";
import ISO6391 from 'iso-639-1';
import MoreInfoItem from '../../pages/MoreInfoItem';
import Loading from '../../components/Assets/Loading';

class MoreInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tmdbInfo: [],
            omdbInfo: [],
            isFetching: true,
            url: ''
        }
    }

    componentDidMount() {
        this.fetchMissingData(this.props.match.params.mediaType, this.props.match.params.recId)
        window.scrollTo(0, 0)
    }

    componentDidUpdate(prevState) {
        if (this.state.tmdbInfo !== prevState.tmdbInfo && this.state.omdbInfo.length === 0) { this.createFetch() }
    }

    searchTerm(title) {
        return title.toString().toLowerCase().replace(/\s+/g, '+')
    }

    slugify = (text) => {
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
        return title.length > 0 ? title : 'InvalidSearchTitle'
    }

    findYear() {
        let searchTerm = this.props.match.params.mediaType === 'tv' ? "first_air_date" : "release_date"
        let year = (this.state.tmdbInfo.hasOwnProperty(searchTerm) && this.state.tmdbInfo[searchTerm] !== "" && this.state.tmdbInfo[searchTerm] !== null) ?
            this.state.tmdbInfo[searchTerm].slice(0, 4) : "[Unknown]"
        return year
    }

    fetchMissingData(mediaType, itemId) {
        fetch(`/fetchTMDBInfo/${mediaType}/${itemId}`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                this.setState({ tmdbInfo: data })
            })
        
    }

    createFetch = () => {
        let year = this.findYear()
        let title = this.props.match.params.mediaType === 'tv' ?
            this.slugify(this.state.tmdbInfo.name) : this.slugify(this.state.tmdbInfo.title)
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
        let title = this.props.match.params.mediaType === 'tv' ?
            this.slugify(this.state.tmdbInfo.original_name) : this.slugify(this.state.tmdbInfo.original_title)
        fetch(`/fetchMoreInfo/${title}/${year}`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                if (data.Response === "True" && this.compareLanguage(data) === true) {
                    this.setOmdb(data)
                } else {
                    let response = 0
                    this.setOmdb(response)
                }
            })
    }

    setOmdb = (data) => {
        this.setState({ omdbInfo: data })
        let url = this.createSearchURL(data)
        this.setState({ url: url })
        this.setState({ isFetching: false })
    }

    compareLanguage = (data) => {
        let lang1 = this.state.tmdbInfo.original_language === "cn" || this.state.tmdbInfo.original_language === "zh" ?
            ["Chinese", "Cantonese", "Mandarin", "MinNan"] : ISO6391.getName(this.state.tmdbInfo.original_language)
        let lang2 = data.Language.replace(/\s+/g, '').split(',')
        const result = _.intersection(lang1, lang2);
        return lang1 === lang2 || lang2.includes(lang1) || result.length > 0 ? true : false
    }

    createSearchURL = (data) => {
        let title = this.props.match.params.mediaType === 'tv' ?
            this.searchTerm(this.state.tmdbInfo.name) : this.searchTerm(this.state.tmdbInfo.title)
        let year = this.findYear()
        if (data.imdbID !== undefined) {
            return `https://www.imdb.com/title/${data.imdbID}`
        } else if (this.state.tmdbInfo.imdb_id !== undefined && this.state.tmdbInfo.imdb_id !== null) {
            return `https://www.imdb.com/title/${this.state.tmdbInfo.imdb_id}`
        } else {
            return `https://www.imdb.com/find?q=${title}+${year}&ref_=nv_sr_sm`
        }
    }

    render() {
        return (
            <div>
                {this.state.isFetching === true && <Loading />}
                {this.state.isFetching === true &&
                    <span id="wow">Loading...</span>
                }
                {this.state.isFetching === false &&
                    <MoreInfoItem tmdb={this.state.tmdbInfo} omdb={this.state.omdbInfo} type={this.props.match.params.mediaType}
                        url={this.state.url} history={this.props.history} />
                }
            </div>
        )
    };
}


export default MoreInfo;