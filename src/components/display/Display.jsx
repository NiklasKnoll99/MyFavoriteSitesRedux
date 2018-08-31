import React from 'react';
import SearchBox from '../searchBox/SearchBox';
import ListItem from '../listItem/ListItem';
import LoadMoreLink from '../loadMoreLink/LoadMoreLink';
//import fetch from '../utils/fetch.js';
import '../style/Style.css';
import '../display/DisplayStyle.css';

export default class Display extends React.Component {
    render() {
        return (
            <div className="accordion accordion--open accordion--fixed">
                <div className="accordion__head">
                    Suchen
                    <div className="searchHead right"><SearchBox placeholder="Suche"/></div>
                </div>
                <div className="accordion__body clearBoth">
                    <div className="siteDisplay">
                    </div>

                    <div className="loadMore"><LoadMoreLink text="Mehr anzeigen"/></div>
                </div>
            </div>
        );
    };
}