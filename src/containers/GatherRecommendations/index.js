import React, { Component } from 'react';
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

    componentDidUpdate() {
        if (this.state.options.length === 0 && this.props.data.keywords.length > 3 ) {
            this.createOptions()
            console.log("Gathering Recommendations")
        }

    }
   
     createOptions = () => {
         let arr = []
       if(this.props.data.keywords !== null){
            this.props.data.keywords.map(entry=>
           arr.push({ id: entry.id, value: entry.name, isChecked: false })
        )}
         this.setState({ options: arr })
        
    }


    render() {
        if (this.props.data.keywords != null && this.props.data.keywords.length > 3){
        return (
            <div>Wow! There are a lot of keywords associated with this series. 
                In order to create the best recommendations for you, please select the 
                three that are most interesting to you.  
                {console.log(this.state.options)}               
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