import React from 'react';
import ChooseMedia from './ChooseMedia';
import Message from './Assets/Message';
import './../stylesheets/Home/Home.css'


const Home=()=> {

    let input = "Welcome to <span id='SiteName'>Find Foreign Features</span>, the site that recommends foreign " +
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