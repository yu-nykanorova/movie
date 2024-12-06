import React, { useContext } from "react";
import { Header } from "../../shared/ui/Header/Header"
import { Film } from "../../shared/ui/Film/Film";
import { Link } from "react-router-dom";
import { WatchNow } from "../../shared/ui/Buttons/WatchNow";
import { LikeButtonEmpty } from "../../shared/ui/Buttons/LikeButtonEmpty";
import { LikeButtonFilled } from "../../shared/ui/Buttons/LikeButtonFilled";
import { FilmsContext } from "../../shared/FilmsContext";

export const Home = () => { 
  const { films, toggleFavorite } = useContext(FilmsContext);

  const trendFilms = films.filter((film) => film.isTrend);
  const mainPoster = films.find((film) => film.title === "Insider");
  const isWatchingFilms = films.filter((film) => film.isWatching);

  if (!films || films.length === 0) {
    return <p>Loading films...</p>;
  }
  
  return (
    <>
      <div className="poster-container">
        <Header />
        <div className="poster">
          <img src={mainPoster.image} alt="main poster" />
          <div className="poster__info">
            <div className="poster__title">{mainPoster.title}</div>
            <div className="poster__details">
              {mainPoster.year} | {mainPoster.genre} | 1 Season
            </div>
            <div className="poster__btn">
              <WatchNow className="btn-watch" />
              {mainPoster.isFavorited ? (
                <LikeButtonFilled onClick={() => toggleFavorite(mainPoster.id)} />
              ) : (
                <LikeButtonEmpty onClick={() => toggleFavorite(mainPoster.id)} />
              )}
            </div>
          </div>
        </div>
      </div>
        
      <div className="trending">
        <div className="trend-title">Trending</div>
        <div className="trending-list">
            {trendFilms.map((film) => (
              <Link key={film.id} to={`/filmPage/${film.id}`}>
                <Film film={film} />
              </Link>
            ))}
        </div>
      </div>
      <div className="continue-watching">
        <div className="continue-watching__title">Continue watching</div>
        <div className="continue-watching__list">
        {isWatchingFilms.map((film) => (
          <Link
            key={film.id}
            to="*"
            className="continue-watching__film"
          >
            <img src={film.image} alt="film poster" />
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
          </Link>
        ))}
        </div>
      </div>
    </>
  )
}
