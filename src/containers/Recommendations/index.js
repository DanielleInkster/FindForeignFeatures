import React, {Component} from 'react';
import Keywords from '../Keywords';

class Recommendations extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    render(){
        return(
            <Keywords movie = {this.props.movie} isFetching = {this.props.isFetching}/>

            
            
        )
    }
}

export default Recommendations;