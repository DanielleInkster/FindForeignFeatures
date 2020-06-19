import React from 'react'
import './FAQ1.css'
import './FAQ2.css'
import './FAQ3.css'
import './FAQ4.css'
import './FAQ5.css'

const FAQ = () => {
    return (
        <div>
            <div className="wrap-collabsible">
                <input id="collapsible" className="toggle" type="checkbox" />
                    <label for="collapsible" className="lbl-toggle" id="label">Why can't I find my favorite English feature?</label>
                    <div className="collapsible-content">
                        <div className="content-inner">
                            
                                <p>
                                    ‣ First, check your spelling. You'll have much better luck searching for 'Sherlock Holmes' than 'Sherlock Homes.'
                                </p>
                                <p>
                                    ‣ Next, check your spacing. Again, you'll be far more successful searching for 'The Birdcage' rather than 'The Bird Cage.'
                                </p>
                                <p>
                                    ‣ Finally, it could be that your favorite feature hasn't yet been entered into the API. You can 
                                add a movie or series to this API by joining The Movie Database (it's free!) 
                                </p>
                                <p>
                                    More information can be found <a href='https://www.themoviedb.org/faq/website'> here.</a>
                                </p>
        
                        </div>
                    </div>
                </div>
            <br/>
              <div className="wrap-collabsible">
                <input id="collapsible2" className="toggle2" type="checkbox" />
                    <label for="collapsible2" className="lbl-toggle2" id="label2">Where do you get your feature information from?</label>
                    <div className="collapsible-content2">
                        <div className="content-inner2">
                         
                                <p>
                                Find Foreign Features makes use of two APIs:
                                </p>
                                <p>
                                <a href='https://developers.themoviedb.org/3/getting-started/introduction'>TMDb API</a> 
                                </p>
                                and 
                                <br />
                                <p>
                                <a href='http://www.omdbapi.com/'>OMDb API</a>
                                </p>
                                <p>
                                <br/>
                                ✺We are not affiliated with nor endorsed by IMDb.✺
                                </p>
                          
                        </div>
                    </div>
                </div>
            <br/>
                <div className="wrap-collabsible">
                  <input id="collapsible3" className="toggle3" type="checkbox" />
                    <label for="collapsible3" className="lbl-toggle3" id="label3">Why is the language described as 'Chinese' rather than 'Mandarin', 'Cantonese', etc.?</label>
                    <div className="collapsible-content3">
                        <div className="content-inner3">
                            <p>
                                This is an unfortunate sacrifice that has been made in order to get the TMDb and OMDb APIs to work together to bring our users 
                                the most complete information about a film or series. 
                                More information about the specific language of a feature can be found at IMDb.
                            </p>
                        </div>
                    </div>
                </div>
            <br />
                <div className="wrap-collabsible">
                  <input id="collapsible4" className="toggle4" type="checkbox" />
                    <label for="collapsible4" className="lbl-toggle4" id="label4">What if I find information I know is incorrect?</label>
                    <div className="collapsible-content4">
                        <div className="content-inner4">
                
                                <p>
                                    As most of the information is provided by the public, sometimes mistakes will happen. 
                                </p>
                                <p>
                                    If you find information about a feature you know to be incorrect, you can fix it yourself if you so choose by 
                                    joining The Movie Database (it's free!) 
                                </p>
                                <p>
                                    More information can be found <a href='https://www.themoviedb.org/faq/website'> here.</a>
                                </p>
                  
                        </div>
                    </div>
                </div>
            <br/>
                <div className="wrap-collabsible">
                    <input id="collapsible5" className="toggle5" type="checkbox" />
                      <label for="collapsible5" className="lbl-toggle5" id="label5">Why haven't you answered my question yet?</label>
                        <div className="collapsible-content5">
                            <div className="content-inner5">
                                
                                    <p>
                                        ‣ Do you still have questions or concerns? 
                                     </p>
                                    <p>
                                        ‣ Is there a feature you'd like to see added to the site?
                                    </p>
                                    <p>
                                        We'd love to hear from you! 
                                    </p>
                                        <a href="mailto:admin@findforeignfeatures.com">Contact us</a>
                                    <br/>
                                    <br />
                            </div>
                        </div>
                </div>
        </div>
    
     
     
    )

}

export default FAQ