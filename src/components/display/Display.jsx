import React from 'react';
import SearchBox from '../searchBox/SearchBox';
import ListItem from '../listItem/ListItem';
import LoadMoreLink from '../loadMoreLink/LoadMoreLink';
import { connect } from 'react-redux';
import fetchSites from '../../actions/fetchSites';
import '../style/Style.css';
import '../display/DisplayStyle.css';
import clear from '../../actions/clear';

class Display extends React.Component {
    
    take = 10;
    skip = 0;
    searchStr = '';

    onSearch(searchStr) {
        this.searchStr = searchStr;
        this.skip = 0;

        if (this.searchStr != '')
            this.props.dispatch(fetchSites(this.searchStr, this.take, this.skip));

        else
            this.props.dispatch(clear());
    };
    
    onLoadMore() {
        this.skip += this.take;
        
        if (this.searchStr != '')
            this.props.dispatch(fetchSites(this.searchStr, this.take, this.skip));

        else
            this.props.dispatch(clear());
    };

    render() {
        return (
            <div className="accordion accordion--open accordion--fixed">
                <div className="accordion__head">
                    Suchen
                    <div className="searchHead right"><SearchBox onSearch={(searchStr) => this.onSearch(searchStr)} placeholder="Suche"/></div>
                </div>
                <div className="accordion__body clearBoth">
                    <div className="siteDisplay">
                        {this.props.jsonObjects && this.props.jsonObjects.map(jsonObject => <ListItem siteId={jsonObject.siteId} appstoreName={jsonObject.appstoreName} locationId={jsonObject.locationId} facebookId={jsonObject.facebookId}/>)}
                    </div>

                    <div className="loadMore"><LoadMoreLink onClick={() => this.onLoadMore()} text="Mehr anzeigen"/></div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps', state);
    console.log(state.fetchSite);

    return {
        jsonObjects: state.fetchSite
    };
};

const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps');

    return {
        dispatch 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);