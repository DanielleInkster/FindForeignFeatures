import React, {Component} from 'react';
import ListItem from '../ListItem';
import Button from '../Button';

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
            <div>
                <div style={{ display: (showing ? 'block' : 'none') }}> {this.props.list.map(item =>
                    <li style={{ listStyleType: "none" }} key={item.id}>
                        <ListItem item={item} type = {this.props.type}/>
                        <Button value="Find more like this!" onClick={() => { this.handleMovieSubmit(item)}} />
                        <h2><br /></h2>
                    </li>)}
                </div>
            </div>
        ) 
    }
}
export default MediaList;