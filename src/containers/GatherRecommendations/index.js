import React, {Component} from 'react';

class GatherRecommendations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keywordRecommendations: [0],
            genreRecommendations: [0],
        }
    }

    componentDidUpdate() {
        if (Number.isInteger(this.props.data.id) &&this.state.keywordRecommendations[0] === 0)  {
            console.log("hello!")
        }
        if (Number.isInteger(this.props.data.id)&& this.state.genreRecommendations[0] === 0){
            console.log("hello!")
        }
    }

    render(){
        return(
           <div> "hello"
            </div>
        )
    }



}

export default GatherRecommendations;