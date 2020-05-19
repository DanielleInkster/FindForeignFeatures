import React, { Component } from 'react';
import Button from '../Button';


class ChooseMedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: true
        }
    }

    onClick = (e) => {
        e.target.value === 'Film' ? this.props.handleMediaSelection('movie') : this.props.handleMediaSelection('tv') 
        this.setState({showing: false})
    }
    
    render() {
        const { showing } = this.state;

        return (
            <div style={{ display: (showing ? 'block' : 'none') }}>
                <Button value="Film" onClick = {this.onClick} />
                <Button value="TV Series" onClick={this.onClick} />
            </div>
        );
    }
}

export default ChooseMedia;
