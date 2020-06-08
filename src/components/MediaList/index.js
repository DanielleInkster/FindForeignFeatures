import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import MediaListItem from '../MediaListItem';
import Button from '../Button';
import './MediaList.css'

class MediaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           options:[]
        } 
    }

    componentDidMount(){
        if(this.state.options.length !== 0) {this.setState({options: this.props.location.list})}
    }


    render(){

        
        return(
            <div  className="column"> 
                {this.props.location.list.map(item =>
                        <li style={{ listStyleType: "none" }} key={item.id} className='card'>
                            <div className='card-content'>
                                <MediaListItem item={item} type = {this.props.match.params.mediaType}/>
                           
                            <Link to={{ 
                            pathname: `/${this.props.match.params.mediaType}/${item.id}/search`,
                            state:{
                                    selection: item,
                                }    
                                }}>
                                    <Button value="Find more like this!"/>
                                </Link>
                            </div>
                                <br/>
                        </li>)
                    }
            </div> 
        ) 
    }
}
export default MediaList;