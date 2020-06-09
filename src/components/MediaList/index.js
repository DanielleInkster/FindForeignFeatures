import React from 'react';
import { Link } from 'react-router-dom';
import MediaListItem from '../MediaListItem';
import Button from '../Button';
import './MediaList.css'

const MediaList =(props)=>  {

    return(
        <div  className="column"> 
            {props.location.list.map(item =>
                <li style={{ listStyleType: "none" }} key={item.id} className='card'>
                    <div className='card-content'>
                        <MediaListItem item={item} type = {props.match.params.mediaType}/>
                           
                        <Link to={{ 
                        pathname: `/${props.match.params.mediaType}/${item.id}/search`,
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
export default MediaList;