import PropTypes from "prop-types";
import { StarIcon } from "../../icons/StarIcon/StarIcon";
import { WatchNow } from "../Buttons/WatchNow";
import { LikeButtonFilled } from "../Buttons/LikeButtonFilled";
import { LikeButtonEmpty } from "../Buttons/LikeButtonEmpty";

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
                    <WatchNow className="btn-watch" />
                    {film.isFavorited ?
                    <LikeButtonFilled /> :
                    <LikeButtonEmpty />}
                </div>
            </div>

        </div>
    )

}

FilmData.propType = {
    film: PropTypes.object,
}
