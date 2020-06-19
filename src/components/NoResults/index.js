import React from 'react'
import Message from '../Message'
import Button from '../Assets/Button'
import {Link} from 'react-router-dom'

const NoResults =()=>{

    let input = "<div id='wow'>Some things are one of a kind!</div>"
    let input2 = "<div id ='text'>No matches were found.</div>"

    return (
        <div>
            <h1><Message text={input} /></h1>
               <Message text={input2} />
            <Link to={{ pathname: '/' }}>
               <Button value="Start a New Search"/>
            </Link>
        </div>
    )
}

export default NoResults