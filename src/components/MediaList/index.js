import React, {Component} from 'react';
import ListItem from '../ListItem';
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
                <div style={{ display: (showing ? 'block' : 'none') }}className='row'> {this.props.list.map(item =>
                    <li style={{ listStyleType: "none" }} key={item.id}>
                        <div className ="column">
                            <div className='card'>
                                <ListItem item={item} type = {this.props.type}/>
                                <Button value="Find more like this!" onClick={() => { this.handleMovieSubmit(item)}} />
                                <br/>
                            </div>
                        </div>
                    </li>)}
                </div>
            
        ) 
    }
}
export default MediaList;