import React, { Component } from 'react';
import 'whatwg-fetch'

const API_KEY2 = `${process.env.REACT_APP_DB_API_KEY2}`

class MoreInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selection:[]
        }
    }

    componentDidMount(){
        console.log(this.props.location.selection)
    }

  
  


    render() {
       
        return (
            <div className='body'>
                {this.props.location.selection.item.original_title}
            </div>
        )
    };

}


export default MoreInfo;