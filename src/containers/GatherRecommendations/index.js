import React, { Component } from 'react';
import CheckBox from '../../components/CheckBox';

class GatherRecommendations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chosenKeywords: [],
            genreRecommendations: [],
            options:[],
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

    handleCheckChildElement = (e) => {
        let options = this.state.options
        options.forEach(entry => {
            if (entry.value === e.target.value)
                entry.isChecked = e.target.checked
        })
        this.setState({ options: options })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        let options = this.state.options
        let arr = []
        options.forEach(entry => {
            if (entry.isChecked=== true) {arr.push(entry.id)}
        })
        arr.length > 3 ? alert('Please select no more than three options') : this.setState({ chosenKeywords: arr })
    }

    render() {
        
        if (this.props.data.keywords != null && this.props.data.keywords.length > 3){
        return (
            <div>Wow! There are a lot of keywords associated with this series. 
                In order to create the best recommendations for you, please select up to 
                three that are most interesting to you. 
                <ul style={{ listStyleType: "none" }} >
                    { this.state.options.map((entry) => {
                            return (<CheckBox handleCheckChildElement={this.handleCheckChildElement}  {...entry} />)
                        })
                    }
                    < input type="submit" value="Submit" onClick={this.handleSubmit}/>
                </ul>         
            </div>
            )
        } else {
            return(
               null
            )
        }
    };

}

export default GatherRecommendations;