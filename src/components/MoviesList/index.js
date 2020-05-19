import React, {Component} from 'react';
import ListItem from '../ListItem';
import Button from '../Button';

class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: true,
        } 
    }

    handleMovieSubmit = (movie) => {
        this.props.handleResults(movie)
        this.setState({ isFetching: true })
        this.props.handleFetchState(true)
        this.setState({ showing: false });
    }

    render(){
    const { showing } = this.state;
        
        return(
            <div>
                <div style={{ display: (showing ? 'block' : 'none') }}> {this.props.list.map(movie =>
                    <li style={{ listStyleType: "none" }} key={movie.id}>
                        <ListItem movie={movie} type = {this.props.type}/>
                        <Button value="Find more like this!" onClick={() => { this.handleMovieSubmit(movie)}} />
                        <h2><br /></h2>
                    </li>)}
                </div>
            </div>
        ) 
    }
}
export default MoviesList;