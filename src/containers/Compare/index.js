// eslint-disable-next-line
import React, { Component } from 'react';

class Compare extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comparedRecommendations: [],
        }
    }

    componentDidMount() {
            this.returnRecommendations()
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

    async returnRecommendations() {
        let arr = await this.compareWithGenres()
        let returnArr = await this.countReturns(arr)
        let filteredArr = await this.returnUnique(returnArr)
        this.props.comparedHandler( await filteredArr)
    }

    render() {
        return (
            null
        )
    }
}

export default Compare;