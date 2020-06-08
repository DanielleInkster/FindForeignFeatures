import React, { Component } from 'react';
// import Recommendations from '../../containers/Recommendations'
import ChooseMedia from '../ChooseMedia';
import Message from '../Message';
import './Home.css';


const Home=()=> {

    let input = "Welcome to <u><span id='SiteName'>Find Foreign Features</span></u>, the site that recommends foreign " +
      "films and TV series based on the English ones you already love."
    let input2 = "<div id='text'>What are you looking for today?</text>"

    return (
      
      <div className="homeScreen">
        <h2 id='heading'><Message text={input} /></h2>
        <Message text={input2} />
        <ChooseMedia />
      </div>
  
    );
}
export default Home;