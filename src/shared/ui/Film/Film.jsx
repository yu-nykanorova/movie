import PropTypes from "prop-types";
import { LikeBlock } from "../LikeBlock/LikeBlock";
import { HeartEmptyIcon } from "../../icons/HeartEmpty/HeartEmptyIcon";
import { HeartFilledIcon } from "../../icons/HeartFilled/HeartFilledIcon";

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
        <LikeBlock className="film-like-block">
          {film.isFavorited ?
          <HeartFilledIcon /> :
          <HeartEmptyIcon />}
        </LikeBlock>            
    </div>
  );
};

Film.propType = {
  film: PropTypes.object,
}

