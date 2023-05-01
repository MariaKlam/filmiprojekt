import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w500/";

const Movie = ({
  poster_path,
  title,
  release_date,
  vote_average,
  overview,
}) => (
  <>
    <img src={IMG_API + poster_path} alt={title} />
    <div className="filmiNimi">{title} </div>
    <div>
      <div className="keskminehinne">Keskmine hinne: {vote_average}</div>
      <div className="kuupaev">Release date: {release_date}</div>
    </div>
    <div className="ylevaade" maxChar="30">
      {overview}
    </div>
    <button
      class="btn btn-secondary"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#collapseExample"
      aria-expanded="false"
      aria-controls="collapseExample">
      Read more
    </button>
  </>
);

export default Movie;
