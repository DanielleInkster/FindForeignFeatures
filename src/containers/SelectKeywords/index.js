import React, { Component } from 'react';
import Message from '../../components/Message';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';

class SelectKeywords extends Component {
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
        this.state.options.forEach(entry => {
            if (entry.value === e.target.value) {entry.isChecked = e.target.checked}
        })
        this.setState({ options: this.state.options })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        let arr = []
        this.state.options.forEach(entry => {
            if (entry.isChecked=== true) {arr.push(entry.id)}
        })
        arr.length > 3 ? alert('Please select no more than three options') : this.setState({ chosenKeywords: arr })
    }

    render() {
        let input = "Wow! There are a lot of keywords associated with this series. "+ 
        "In order to create the best recommendations for you, please select up to "+
        "three that are most interesting to you."
        
        if (this.props.data.keywords != null && this.props.data.keywords.length > 3){
        return (
            <div>
                <Message text = {input}/>
                <ul style={{ listStyleType: "none" }} >
                    { this.state.options.map((entry) => {
                            return (<CheckBox handleCheckChildElement={this.handleCheckChildElement}  {...entry} />)
                        })
                    }
                    <Button value="Submit" onClick={this.handleSubmit} />
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

export default SelectKeywords;