import React from 'react';

const Movie = ({ title, summary, poster }) => {
    return (
        <div className="movie">
            <div className="img-wrapper">
                <img src={poster} />
            </div>
            <div className="title">{title}</div >
            <div className="summary">{summary.slice(0, 500)}...</div>
        </div >
    )
};

export default Movie;