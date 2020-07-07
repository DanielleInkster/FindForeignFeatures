# FindForeignFeatures

An application used to recommend tv programmes and films in languages other than English based on English programs that the user enjoys. 

<div align="center"><img src="./src/Images/3F.gif" alt="Gif of FindForeign Features site in use" width="300px" height="400px"></div>

### FindForeignFeatures is live! 
[Check it out here!](http://www.findforeignfeatures.com/)

## Installation and Setup Instructions:

Clone down this repository. You will need node and npm installed globally on your machine.

## Installation:

npm install

## To Start Server:

npm start

## To Visit App:

localhost:3000

## Reflection

This project was a spin-off of a tutorial in React that created a simple search of the TVmaze API by title. Very quickly, I decided I already knew what series I enjoyed in English and I was more interested in building something that would recommend foreign series. I switched to TMDB API as it offered more search functionality, such as searching by keywords and by genre. Once I began using TMDB API, it was fairly straight-forward to extend to search for films as well. I also included the OMDB API for finding more information about a series or film, as the OMDB API entries tend to have more complete and curated information when searching by title. 

This project provided me with a significant amount of learning opportunities. This is my first solo React project, so I learned a lot about separating my work into containers with state and logic, and components, which are generally stateless and use only logic concerned with presentation. I also had a lot of opportunities to review simplifying components so they could be re-used. 

As the project progressed, I decided to add React-Router to create more RESTful routes that would allow a user to move forward and back between pages. Once this was implemented, the next logical step was to use Redux in order to hold certain values in the store to improve speed by eliminating repetitive API calls, as well user experience by streamlining the search process. Finally, I added an Express server to move the API calls to the backend, thus hiding the API keys. The Express server also allowed for me to take my project live on Heroku. 

There were some challenges moving the calls to the backend, as some of them began to return far more slowly or even fail due to delay. I resolved this by installing 'fetch-retry' that would repeat the call at set intervals should the previous call not return a timely response. 

At the end of the day, the major technologies implemented in this project are React, React-Router 4.0, Redux, Express, as well as a significant amount of VanillaJS, JSX, and CSS.  Additionally, I added a Google Analytics tracker to get information such as site hits, user demographics and response times.
