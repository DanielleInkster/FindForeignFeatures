import React, { Component, Fragment } from 'react';
const API_KEY = `${process.env.REACT_APP_DB_API_KEY}`

class GatherRecommendations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keywordRecommendations: [],
            genreRecommendations: [],
            options:[]

        }

    }

    // componentDidUpdate() {
    //     if (Number.isInteger(this.props.data.id) && this.state.keywords[0] === 0) {
    //         fetch(`https://api.themoviedb.org/3/tv/${this.props.data.id}/keywords?api_key=${API_KEY}`)
    //             .then((response) => {
    //                 return response.json();
    //             }).then((data) => {
    //                 this.setState({ keywords: data.results })
    //                 this.setState({ seriesSelection: this.props.data })
    //                 this.setState({ rating: this.props.data.vote_average })
    //                 this.setState({ genres: this.props.data.genre_ids })
    //             })
    //         console.log("Series data gathered")
    //     }

    // }]
   
     createOptions = () => {
         let arr = []
       if(this.props.data.keywords != null){
            this.props.data.keywords.map(entry=>
           arr.push({ id: entry.id, value: entry.name, isChecked: false })
        )}
        //  this.setState({ options: arr })
        return arr
    }


    render() {
        if (this.props.data.keywords != null && this.props.data.keywords.length > 3){
        return (
            <div>Wow! There are a lot of keywords associated with this series. 
                In order to create the best recommendations for you, please select the 
                three that are most interesting to you. 
                {console.log(this.createOptions())} 
                
            </div>
            )
        } else {
            return(
                <div>Hello!</div>

            )
        }
    };

}

export default GatherRecommendations;