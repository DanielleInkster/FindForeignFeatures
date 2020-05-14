import React, {Component} from 'react';
import GatherData from '../../containers/GatherData';
import ListItem from '../ListItem';
import Button from '../Button';

// const CheckForNull = (item) => {
//     return (item === null) ? true : false
// }

class SeriesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seriesSelection : [],
            showing: true,
        } 
    }

    handleSeriesSubmit = (series) => {
        this.setState({seriesSelection: series});
        this.setState({ showing: false });
    }

    render(){
    const { showing } = this.state;
        
    return(
        <div>
            <div style={{ display: (showing ? 'block' : 'none') }}> {this.props.list.map(series =>
                <li style={{ listStyleType: "none" }} key={series.id}>
                    <ListItem series = {series} />
                    <Button value="Find more like this!" onClick={() => {this.handleSeriesSubmit(series)}} />
                    <br /><br />
                </li>)}
            </div>
            <div style={{ display: (!showing ? 'block' : 'none') }}> 
                <GatherData data = {this.state.seriesSelection} />
            </div>
        </div>
    ) 
    }
}
export default SeriesList;