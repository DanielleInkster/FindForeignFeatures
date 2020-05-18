import React, { Component } from 'react';

class Compare extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comparedRecommendations: [],
        }
    }

    compareWithGenres=()=>{
        let arr =[]
        this.props.keywordRecs.forEach(item =>{
            this.props.genres.forEach(num => {
                if(item.genre_ids.includes(num)) arr.push(item)
            })
            
        })
        return arr
    }

    counter=(arr)=>{
        let counts = {};
        arr.forEach(function (x) { counts[x.id] = (counts[x.id] || 0) + 1; })
        console.log(counts)
    }

    getRecommendations() {
        this.props.comparedHandler(this.state.comparedRecommendations)
    }

    returnRecommendations() {
        console.log(this.props.keywordRecs)
        console.log(this.props.genres)
        let arr = this.compareWithGenres()
        this.counter(arr)
        this.setState({ comparedRecommendations: arr })
        // setTimeout(() => { this.getRecommendations() }, 3000);
    }

    render() {
        return (
            <div>
                {this.props.keywordRecs.length === 0 &&
                    null
                }
                {this.props.keywordRecs.length !== 0 && this.state.comparedRecommendations.length === 0 &&
            this.returnRecommendations()
                }
            </div>
        )
    }
}

export default Compare;