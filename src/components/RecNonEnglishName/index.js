import React from 'react';
import HtmlParser from '../HtmlParser';

const RecNonEnglishName = (props) => {
    let searchTerm = ''
    let searchTerm2 = ''
    props.type === 'tv' ? searchTerm = "name" : searchTerm = "title"
    props.type === 'tv' ? searchTerm2 = "original_name" : searchTerm2 = "original_title"

    if (props.item[searchTerm] !== props.item[searchTerm2]) {
        return <HtmlParser text={`English Title: <b>${props.item[searchTerm]}</b>`} />
    } else {
        return <HtmlParser text={`English Title: <b>N/A</b>`} />
    }
}


export default RecNonEnglishName;