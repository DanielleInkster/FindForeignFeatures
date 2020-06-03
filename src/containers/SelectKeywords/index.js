import React, { Component } from 'react';
import Message from '../../components/Message';
import CheckBoxList from '../../components/CheckBoxList';
import Button from '../../components/Button';
import './SelectKeywords.css'

class SelectKeywords extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options:[],
            showing: true
        }
    }

    componentDidMount() {
        console.log("hello from SK")
            this.createOptions()
    }

    mediaType(){
      return this.props.location.type === 'tv' ? 'TV series' : 'film'
    }
   
    createOptions = () => {
        let arr = []
        this.props.location.keywords.map(entry=>
            arr.push({ key: entry.id, id: entry.id, value: entry.name, isChecked: false })
        )
        this.setState({ options: arr }) 
    }

    handleCheckChildElement = (e) => { 
        this.state.options.forEach(entry => {
            if (entry.value === e.target.value) {entry.isChecked = e.target.checked}
        })
        this.setState({ options: this.state.options })
    }

    checkSubmissionLength=(arr)=>{
        var i =0
        arr.forEach(entry => { if (entry.isChecked === true) { i++ } })
        return i
    }
    
    createSubmit = (e)=>{
        e.preventDefault();
        let arr = []
        this.state.options.forEach(entry => { if (entry.isChecked === true) { arr.push(entry.id) } })
        this.props.handler(arr)
        this.setState({ showing: false })
    }

    handleSubmit = (e)=>{
       let num =  this.checkSubmissionLength(this.state.options)
       0 < num && num < 4 ? this.createSubmit(e) : alert("Please choose between one and three keywords")   
    }

    selectKeywords =(input, showing)=>{
        while (this.props.keywords != null && this.props.keywords.length > 3) {
            return (
                <div style={{ display: (showing ? 'block' : 'none') }}>
                    <Message text={input}/>
                    <CheckBoxList options={this.state.options} handleChildElement={this.handleCheckChildElement} />
                    <Button value="Submit" onClick={this.handleSubmit} />
                </div>
            )
        } 
    }

    render(){
        const {showing} = this.state
        let input = `<span id='wow'>Wow!</span> <br/><div id='heading'>There are a lot of keywords associated with this ${this.mediaType()}. `+ 
        "In order to create the best recommendations, please select up to "+
        "three that are most interesting to you. </div>"
        
        return (
            this.selectKeywords(input, showing)  || null
        )
    };

}

export default SelectKeywords;