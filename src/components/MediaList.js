import React from 'react';
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import MediaListItem from './MediaListItem';
import Button from './Assets/Button';
import './../stylesheets/MediaList/MediaList.css'

const MediaList =(props)=>  {
    if(props.list.length !==0){
        return(
        <div>
            <div id='wow'>Do you mean...</div>
                <br/>
                <div  className="column"> 
                    {props.list.map(item =>
                        <li style={{ listStyleType: "none" }} key={item.id} className='card'>
                            <div className='card-content'>
                                <MediaListItem item={item} type = {props.match.params.mediaType}/>
                                
                                <Link to={{ pathname: `/${props.match.params.mediaType}/${item.id}/search/keywords`}}>
                                    <Button value="Find more like this!" onClick={() => { props.storeSelection(item)}}/>
                                </Link>
                            </div>
                            <br/>
                        </li>)
                    }
                </div> 
            </div>
        ) 
    } else {
        return (
            <Redirect to='error/404' />
        )
    }  
}


const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeSelection: (selection) => dispatch({ type: 'SELECTION', val: selection })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaList)