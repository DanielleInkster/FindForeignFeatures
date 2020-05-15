import React, { Component } from 'react';
import Message from '../../components/Message';
import CheckBoxList from '../../components/CheckBoxList';
import Button from '../../components/Button';


class SelectKeywords extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options:[],
            showing: true
        }
    }

    componentDidUpdate() {
        if (this.state.options.length === 0 && this.props.keywords.length > 3 ) {
            this.createOptions()
            console.log("Gathering Recommendations")
        } 
    }
   
    createOptions = () => {
        let arr = []
       if(this.props.keywords !== null){
            this.props.keywords.map(entry=>
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
        arr.length > 3 ? alert('Please select no more than three options') : this.props.handler(arr)
        console.log(arr)
        this.setState({ showing: false})
    }

    selectKeywords =(input, showing)=>{
        while (this.props.keywords != null && this.props.keywords.length > 3) {
            return (
                <div style={{ display: (showing ? 'block' : 'none') }}>
                    <Message text={input} />
                    <CheckBoxList options={this.state.options} handleChildElement={this.handleCheckChildElement} />
                    <Button value="Submit" onClick={this.handleSubmit} />
                </div>
            )
        } 
    }

    render(){
        const {showing} = this.state
        let input = "Wow! There are a lot of keywords associated with this movie. "+ 
        "In order to create the best recommendations for you, please select up to "+
        "three that are most interesting to you."
        
        return (
            this.selectKeywords(input, showing)  
        )
    };

}

export default SelectKeywords;