import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import MediaListItem from '../MediaListItem';
import Button from '../Button';
import './MediaList.css'

class MediaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: true,
        } 
    }


    render(){
    const { showing } = this.state;
        
        return(
            <div style={{ display: (showing ? 'block' : 'none') }} className="column"> 
                {this.props.location.list.map(item =>
                        <li style={{ listStyleType: "none" }} key={item.id} className='card'>
                            <div className='card-content'>
                                <MediaListItem item={item} type = {this.props.location.mediaType}/>
                           
                            <Link to={{ 
                            pathname: `${item.id}`,
                            state:{
                                    selection: item,
                                    type: this.props.location.mediaType
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