import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TextBoxValue: '',
            showing: true
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleData(this.state.TextBoxValue)
        this.setState({showing: false})
    }

    handleChange = (e) => {
        this.setState({ TextBoxValue: e.target.value })
    }
  
    render() {
        const { showing } = this.state;
        return (
            <div style={{ display: (showing ? 'block' : 'none') }}>
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