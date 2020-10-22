import React from "react";
import ConvertISO from "../components/Assets/ConvertISO";
import MoreInfoImage from "../components/MoreInfoItem/MoreInfoImage";
import RecTitle from "../components/MoreInfoItem/MoreInfoTitle";
import MoreInfoNonEnglishName from "../components/MoreInfoItem/MoreInfoNonEnglishName";
import DisplayPlot from "../components/MoreInfoItem/DisplayPlot";
import CheckForUndefined from "../components/MoreInfoItem/CheckForUndefined";
import ReleaseDate from "../components/MoreInfoItem/ReleaseDate";
import IfOmdbIsNull from "../components/MoreInfoItem/IfOmdbIsNull";
import Button from "../components/Assets/Button";

import "../stylesheets/MoreInfo/MoreInfoItem.css";

const MoreInfoItem = ({ type, omdb, tmdb, url }) => {
  return (
    <div className="flex-container">
      <div className="flex-child image">
        <MoreInfoImage tmdb={tmdb} omdb={omdb} />
      </div>
      <div className="flex-child data">
        <h1 className="title">
          <RecTitle item={tmdb} type={type} />
        </h1>
        <h2 className="nonEng">
          <MoreInfoNonEnglishName item={tmdb} type={type} />
        </h2>
        <h3>
          <ConvertISO language={tmdb.original_language} />
        </h3>
        <h3>
          <u>Plot</u>
        </h3>
        <DisplayPlot omdb={omdb.Plot} tmdb={tmdb.overview} />
        <b>
          <u>Cast:</u>
        </b>{" "}
        <CheckForUndefined omdb={omdb.Actors} />
        <b>
          <u>Writers:</u>
        </b>{" "}
        <CheckForUndefined omdb={omdb.Writer} />
        <b>
          <u>Awards and Nominations:</u>
        </b>{" "}
        <CheckForUndefined omdb={omdb.Awards} />
        <b>
          <u>IMDB Rating:</u>
        </b>{" "}
        <CheckForUndefined omdb={omdb.imdbRating} />
        <br />
        <b>
          <u>Original Release Date:</u>
        </b>{" "}
        <ReleaseDate omdb={omdb.Released} tmdb={tmdb} type={type} />
        <br />
        {type === "movie" && (
          <b>
            <u>Rating: </u>
          </b>
        )}
        {type === "movie" && <CheckForUndefined omdb={omdb.Rated} />}
        {type === "tv" && (
          <b>
            <u>Number of Seasons: </u>
          </b>
        )}
        {type === "tv" && (
          <IfOmdbIsNull
            omdb={omdb.totalSeasons}
            tmdb={tmdb.number_of_seasons}
          />
        )}
        <b>
          <u>Runtime:</u>
        </b>
        {type === "tv" && (
          <IfOmdbIsNull
            omdb={omdb.Runtime}
            tmdb={tmdb.episode_run_time + " min"}
          />
        )}
        {type === "movie" && (
          <IfOmdbIsNull omdb={omdb.Runtime} tmdb={tmdb.runtime + " min"} />
        )}
        <br />
        <a target="_blank" href={url} alt="Find more at IMDB">
          <Button value={"Find more at IMDB"} />
        </a>
      </div>
    </div>
  );
};

export default MoreInfoItem;
