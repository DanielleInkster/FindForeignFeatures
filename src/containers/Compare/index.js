import React, { Component } from 'react';

class Compare extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comparedRecommendations: [],
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.keywordRecs !== prevProps.keywordRecs) {
            this.returnRecommendations()
            console.log("Compare works")
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


    returnUnique =(arr) =>{
        let t;
        return arr.filter((t = {}, a => !(t[a.id] = a.id in t)))
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
        setTimeout(() => { this.getRecommendations() }, 1500);
    }

    render() {
        return (
               null
        )
    }
}

export default Compare;