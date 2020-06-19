import React from 'react'
import './FAQ1.css'
import './FAQ2.css'
import './FAQ3.css'
import './FAQ4.css'
import './FAQ5.css'

const FAQ = () => {
    return (
        <div>
            <div class="wrap-collabsible">
                <input id="collapsible" class="toggle" type="checkbox" />
                    <label for="collapsible" class="lbl-toggle" id="label">Why can't I find my favorite English feature?</label>
                    <div class="collapsible-content">
                        <div class="content-inner">
                            <ul>
                                <li>
                                    ‣ First, check your spelling. You'll have much better luck searching for 'Sherlock Holmes' than 'Sherlock Homes.'
                                </li>
                                <br/>
                                <li>
                                    ‣ Next, check your spacing. Again, you'll be far more successful searching for 'The Birdcage' rather than 'The Bird Cage.'
                                </li>
                                <br />
                                <li>
                                    ‣ Finally, it could be that your favorite feature hasn't yet been entered into the API. You can 
                                add a movie or series to this API by joining The Movie Database (it's free!) 
                                </li>
                                <br />
                                <li>
                                    More information can be found <a href='https://www.themoviedb.org/faq/website'> here.</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            <br/>
              <div class="wrap-collabsible">
                <input id="collapsible2" class="toggle2" type="checkbox" />
                    <label for="collapsible2" class="lbl-toggle2" id="label2">Where do you get your feature information from?</label>
                    <div class="collapsible-content2">
                        <div class="content-inner2">
                            <ul>
                                <li>
                                Find Foreign Features makes use of two APIs:
                                </li>
                                <li>
                                <br />
                                <a href='https://developers.themoviedb.org/3/getting-started/introduction'>TMDb API</a> 
                                </li>
                                <br />
                                and 
                                <br />
                                <br />
                                <li>
                                <a href='http://www.omdbapi.com/'>OMDb API</a>
                                </li>
                                <li>
                                <br/>
                                ✺We are not affiliated with nor endorsed by IMDb.✺
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            <br/>
                <div class="wrap-collabsible">
                  <input id="collapsible3" class="toggle3" type="checkbox" />
                    <label for="collapsible3" class="lbl-toggle3" id="label3">Why is the language described as 'Chinese' rather than 'Mandarin', 'Cantonese', etc.?</label>
                    <div class="collapsible-content3">
                        <div class="content-inner3">
                            <p>
                                This is an unfortunate sacrifice that has been made in order to get the TMDb and OMDb APIs to work together to bring our users 
                                the most complete information about a film or series. 
                                More information about the specific language of a feature can be found at IMDb.
                            </p>
                        </div>
                    </div>
                </div>
            <br />
                <div class="wrap-collabsible">
                  <input id="collapsible4" class="toggle4" type="checkbox" />
                    <label for="collapsible4" class="lbl-toggle4" id="label4">What if I find information I know is incorrect?</label>
                    <div class="collapsible-content4">
                        <div class="content-inner4">
                            <ul>
                                <li>
                                    As some of the information is provided by the public, some mistakes will happen. 
                                </li>
                                <br/>
                                <li>
                                    If you find information about a feature you know to be incorrect, you can fix it yourself if you so choose by 
                                    joining The Movie Database (it's free!) 
                                </li>
                                <br/>
                                <li>
                                    More information can be found <a href='https://www.themoviedb.org/faq/website'> here.</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            <br/>
                <div class="wrap-collabsible">
                    <input id="collapsible5" class="toggle5" type="checkbox" />
                      <label for="collapsible5" class="lbl-toggle5" id="label5">Why haven't you answered my question yet?</label>
                        <div class="collapsible-content5">
                            <div class="content-inner5">
                                <ul>
                                    <li>
                                        ‣ Do you still have questions or concerns? 
                                     </li>
                                    <br/>
                                    <li>
                                        ‣ Is there a feature you'd like to see added to the site?
                                    </li>
                                    <br />
                                    <li>
                                        We'd love to hear from you! 
                                    </li>
                                    <br />
                                        <a href="mailto:admin@findforeignfeatures.com">Contact us</a>
                                    </ul>
                            </div>
                        </div>
                </div>
        </div>
    
     
     
    )

}

export default FAQ