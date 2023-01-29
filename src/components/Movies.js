import React from 'react'

const IMAGES_API = "https://image.tmdb.org/t/p/w1280";
const setVoteClass = (vote) => {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 6) {
        return "orange";
    } else {
        return "red";
    }
};

const Movies = ({title,poster_path,overview,vote_average}) => {
  return (
    <div className="movie">
        <img src={poster_path ? (IMAGES_API + poster_path) : 'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'} alt={title}/>
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={
                `tag ${setVoteClass(vote_average)}`
            }>{vote_average}</span>
        </div>
        <div className="movie-over">
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div>
  )
}

export default Movies
