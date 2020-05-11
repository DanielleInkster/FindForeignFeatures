import React, { Component } from 'react';
import CheckBox from './CheckBox';
// const API_KEY = `${process.env.REACT_APP_DB_API_KEY}`

class GatherRecommendations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keywordRecommendations: [],
            genreRecommendations: [],
            options:[],
            choices:[]
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

    // handleAllChecked = (event) => {
    //     let options = this.state.options
    //     options.forEach(entry => entry.isChecked = event.target.checked)
    //     this.setState({ options: options })
    // }

    handleCheckChildElement = (event) => {
        let options = this.state.options
        options.forEach(entry => {
            if (entry.value === event.target.value)
                entry.isChecked = event.target.checked
                console.log(entry)
        })
        this.setState({ choices: options })
        console.log(this.state.choices)
    }


    render() {
        if (this.props.data.keywords != null && this.props.data.keywords.length > 3){
        return (
            <div>Wow! There are a lot of keywords associated with this series. 
                In order to create the best recommendations for you, please select the 
                three that are most interesting to you.  
                <ul style={{ listStyleType: "none" }}>
                    {
                        this.state.options.map((entry) => {
                            return (<CheckBox handleCheckChildElement={this.handleCheckChildElement}  {...entry} />)
                        })
                    
                }
                    < input type="submit" value="Submit" />
                </ul>             
            </div>
            )
        } else {
            return(
                <div>Hello!
                { console.log(this.state.options) } 
                </div>
            )
        }
    };

}

export default GatherRecommendations;