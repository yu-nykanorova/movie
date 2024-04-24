import { Header } from "../../shared/ui/Header/Header"
import { Film } from "../../shared/ui/Film/Film";
import { films } from "../../database/films";
import { Link } from "react-router-dom";
import { LikeBlock } from "../../shared/ui/LikeBlock/LikeBlock";
import { HeartEmptyIcon } from "../../shared/icons/HeartEmpty/HeartEmptyIcon";
import { HeartFilledIcon } from "../../shared/icons/HeartFilled/HeartFilledIcon";
import { WatchNow } from "../../shared/ui/Buttons/WatchNow";

export const Home = () => { 
  const trendFilms = films.filter((film) => film.isTrend);
  const listItems = trendFilms.map((film) => (
    <Link key={film.id} to={`/filmPage/${film.id}`}>
      <Film film={film} />
    </Link>
  ));

  const isWatchingFilms = films.filter((film) => film.isWatching);
  
  return (
    <>
      <div className="poster-container">
        <Header />
        <div className="poster">
          <img src="/src/assets/img/insider.png" alt="main poster" />
          <div className="poster__info">
            <div className="poster__title">Insider</div>
            <div className="poster__details">2022 | Comedy horror | 1 Season</div>
            <div className="poster__btn">
              <WatchNow />
              <button className="poster__btn-like">
                <LikeBlock className="film-like-block">
                    <HeartEmptyIcon className="icon-heart" />
                </LikeBlock> 
              </button>
            </div>
          </div>
        </div>
      </div>
        
      <div className="trending">
        <div className="trend-title">Trending</div>
        <div className="trending-list">
            {listItems}
        </div>
      </div>
      <div className="continue-watching">
        <div className="continue-watching__title">Continue watching</div>
        <div className="continue-watching__list">
        {isWatchingFilms.map((film) => (
          <div key={film.id} className="continue-watching__film">
            <img src={film.image} alt="film poster" />
            <LikeBlock className="film-like-block">
              {film.isFavorited ?
              <HeartFilledIcon /> :
              <HeartEmptyIcon />}
            </LikeBlock>
          </div>
        ))}
        </div>
      </div>
    </>
  )
}
