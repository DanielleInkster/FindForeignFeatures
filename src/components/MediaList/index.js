import React, {Component} from 'react';
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

    handleMovieSubmit = (item) => {
        this.props.handleResults(item)
        this.setState({ isFetching: true })
        this.props.handleFetchState(true)
        this.setState({ showing: false });
    }

    render(){
    const { showing } = this.state;
        
        return(
            <div style={{ display: (showing ? 'block' : 'none') }} className="column"> 
                    {this.props.list.map(item =>
                        <li style={{ listStyleType: "none" }} key={item.id} className='card'>
                            <div className='card-content'>
                                <MediaListItem item={item} type = {this.props.type}/>
                            </div>
                                <Button value="Find more like this!" onClick={() => { this.handleMovieSubmit(item)}} />
                                <br/>
                        </li>)
                    }
            </div> 
        ) 
    }
}
export default MediaList;