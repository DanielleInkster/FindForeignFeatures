import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            TextBoxValue: '',
        }

        this.state = this.initialState
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleData(this.state.TextBoxValue)
        this.refs.btn.setAttribute("disabled", "disabled")
        this.setState(this.initialState)
    }

    handleChange = (e) => {
        this.setState({ TextBoxValue: e.target.value })
    }
  

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                Series Name:
                <input type="text" value={this.state.TextBoxValue} onChange={this.handleChange.bind(this)} />
                </label>
                <input type="submit" ref ="btn" value="Submit" />
            </form>
            </div>
        );
    }
}
export default Form;