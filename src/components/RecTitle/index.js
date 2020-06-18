// eslint-disable-next-line
import React from 'react';

const RecTitle = (props) => {
    let searchTerm = props.type === 'tv' ? "original_name" : "original_title"
    return props.item[searchTerm]
}

export default RecTitle