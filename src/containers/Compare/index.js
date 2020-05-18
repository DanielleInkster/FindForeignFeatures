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

    countReturns=(arr)=>{
        let counts = {};
        arr.forEach(function (x) { x.returns = (counts[x.id] = (counts[x.id] || 0) + 1) })
        return arr
    }

    identifyUnique=(value, index, self)=>{
        return self.indexOf(value) === index;
    }

    returnUnique =(arr) =>{
        return arr.filter(this.identifyUnique)
    }


    getRecommendations() {
        this.props.comparedHandler(this.state.comparedRecommendations)
    }

    getRecommendations() {
        this.props.comparedHandler(this.state.comparedRecommendations)
    }

    returnRecommendations() {
        let arr = this.compareWithGenres()
        let returnArr = this.countReturns(arr)
        let filteredArr = this.returnUnique(returnArr)
        this.setState({ comparedRecommendations: filteredArr })
        setTimeout(() => { this.getRecommendations() }, 3000);
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