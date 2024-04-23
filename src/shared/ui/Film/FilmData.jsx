import PropTypes from "prop-types";
import { LikeBlock } from "../LikeBlock/LikeBlock";
import { HeartEmptyIcon } from "../../icons/HeartEmpty/HeartEmptyIcon";
import { HeartFilledIcon } from "../../icons/HeartFilled/HeartFilledIcon";
import { StarIcon } from "../../icons/StarIcon/StarIcon";

export const FilmData = ({film}) => {
  
    return (
        <div className="film-data">
            <div className="film-data__image">
                <img src={film.image} alt="film poster" />
            </div>
            <div className="film-data__info">
                <div className="film-data__title">
                    <h3>{film.title}</h3>
                    <div className="rating">
                        <StarIcon />
                        <p>{film.rating}/10</p> 
                    </div>
                </div>
                <div className="film-data__details">
                    <p>{film.year}</p>
                    <p>{film.genre}</p>
                    <p>{film.duration}</p>
                </div>
                <p className="film-data__desc">{film.desc}</p>
                <div className="film-data__btn">
                    <button className="btn film-data__btn-watch">Watch now</button>
                    <button className="film-data__btn-like">
                        <LikeBlock className="film-like-block">
                            {film.isFavorited ?
                            <HeartFilledIcon className="icon-heart" /> :
                            <HeartEmptyIcon className="icon-heart" />}
                        </LikeBlock> 
                    </button>
                </div>
            </div>

        </div>
    )

}

FilmData.propType = {
    film: PropTypes.object,
}
