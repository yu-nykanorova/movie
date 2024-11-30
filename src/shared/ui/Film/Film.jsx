import PropTypes from "prop-types";
import { LikeButtonFilled } from "../Buttons/LikeButtonFilled";
import { LikeButtonEmpty } from "../Buttons/LikeButtonEmpty";

export const Film = ({ film }) => {
    // const handleToggleFavorite = () => {
    //     if (film.isFavorited) {
    // }
    // }
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
        {/* {film.isFavorited && <div onClick={handleUnFavorite}>UnCheck favorite</div>}       */}
        <div className="like-buttons-box">
          {film.isFavorited ?
          <LikeButtonFilled className="btn-like-small"  /> :
          <LikeButtonEmpty className="btn-like-small" />}
        </div>            
    </div>
  );
};

Film.propType = {
  film: PropTypes.object,
}

