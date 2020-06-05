import React, { Component } from 'react';
import Keywords from '../Keywords';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
    render() {
        return (
            <div>
            {console.log(this.props)}
            <Keywords item={this.props} />
            </div>
        )
    }
}

export default Search