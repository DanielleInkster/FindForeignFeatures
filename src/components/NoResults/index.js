import React from 'react'
import Message from '../Message'

const NoResults =()=>{

    let input = "<div id='wow'>Some things are one of a kind!</div>"
    let input2 = "<div id ='text'>No matches were found.</div>"

    return (
        <div>
            <h1><Message text={input} /></h1>
            <p><Message text={input2} /></p>
        </div>
    )
}

export default NoResults