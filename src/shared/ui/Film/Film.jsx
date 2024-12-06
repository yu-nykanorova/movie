import React, { useContext } from "react";
import PropTypes from "prop-types";
import { LikeButtonFilled } from "../Buttons/LikeButtonFilled";
import { LikeButtonEmpty } from "../Buttons/LikeButtonEmpty";

export const Film = ({ film }) => {

  return (
    <div className="film">
        <div className="film-image">  
          <img src={film.image} alt={film.title} />
        </div>
        <div className="film-info">
          <div className="film-title">
            {film.title}
          </div>
          <div className="film-detail">
            <p>{film.year} | {film.genre}</p>
          </div>
        </div>
        <div className="like-buttons-box">
          {film.isFavorited ? (
            <LikeButtonFilled
              className="btn-like-small"
            />
          ) : (
            <LikeButtonEmpty
              className="btn-like-small"
            />
          )}
        </div>            
    </div>
  );
};

Film.propType = {
  film: PropTypes.object,
}

