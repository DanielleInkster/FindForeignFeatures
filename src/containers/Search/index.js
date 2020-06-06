import React, { Component } from 'react';
import Keywords from '../Keywords';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selection:[],
            keywords:[]
        
        }
    }

    componentDidMount(){
        console.log(this.props)
        if (this.state.selection.length === 0 && this.props.location.selection !== undefined) {
            this.setState({ selection: this.props.location.selection })
        }
        if (this.state.keywords.length === 0 && this.props.location.keywords !== undefined) { 
            this.setState({ keywords: this.props.location.keywords })
        }
    }

    render() {
        return (
            <div>
            {this.state.keywords.length ===0 &&
            <Keywords item={this.props} />
            }
            {this.state.keywords.length !== 0 &&
            "Hello, I've got keywords!"}
            </div>
        )
    }
}

export default Search