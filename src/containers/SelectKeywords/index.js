import React, { Component } from 'react';
import Message from '../../components/Message';
import CheckBoxList from '../../components/CheckBoxList';
import Button from '../../components/Button';
// import GatherRecommendations from '../GatherRecommendations';

class SelectKeywords extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedKeywords: [],
            selectedSeries: [],
            options:[],
        }
    }

    componentDidUpdate() {
        if (this.state.options.length === 0 && this.props.data.keywords.length > 3 ) {
            this.createOptions()
            this.setState({ selectedSeries: this.props.data }) 
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
        arr.length > 3 ? alert('Please select no more than three options') : this.setState({ selectedKeywords: arr })
    }

    conditionalRender =(input)=>{
        while (this.props.data.keywords != null && this.props.data.keywords.length > 3) {
            return (
                <div>
                    <Message text={input} />
                    <CheckBoxList options={this.state.options} handleChildElement={this.handleCheckChildElement} />
                    <Button value="Submit" onClick={this.handleSubmit} />
                </div>
            )
        } 
    }

    render(){

        let input = "Wow! There are a lot of keywords associated with this series. "+ 
        "In order to create the best recommendations for you, please select up to "+
        "three that are most interesting to you."
        
        return (
            <div>
            {this.conditionalRender(input)}
            </div>
        )
    };

}

export default SelectKeywords;