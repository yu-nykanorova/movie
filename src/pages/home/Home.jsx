import React, { useContext } from "react";
import Slider from "react-slick";
import { Header } from "../../shared/ui/Header/Header";
import { Film } from "../../shared/ui/Film/Film";
import { Link } from "react-router-dom";
import { WatchNow } from "../../shared/ui/Buttons/WatchNow";
import { LikeButtonEmpty } from "../../shared/ui/Buttons/LikeButtonEmpty";
import { LikeButtonFilled } from "../../shared/ui/Buttons/LikeButtonFilled";
import { FilmsContext } from "../../shared/FilmsContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => { 
  const { films, toggleFavorite } = useContext(FilmsContext);

  const trendFilms = films.filter((film) => film.isTrend);
  const mainPoster = films.find((film) => film.title === "Insider");
  const isWatchingFilms = films.filter((film) => film.isWatching);

  if (!films || films.length === 0) {
    return <p>Loading films...</p>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className="home-page">
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
              <WatchNow className="btn-watch poster__btn-watch" />
              {mainPoster.isFavorited ? (
                <LikeButtonFilled
                  className="poster__btn-like"
                  onClick={() => toggleFavorite(mainPoster.id)} />
              ) : (
                <LikeButtonEmpty
                  className="poster__btn-like"
                  onClick={() => toggleFavorite(mainPoster.id)} />
              )}
            </div>
          </div>
        </div>
      </div>
        
      <div className="trending content">
        <div className="trend-title">Trending</div>
        <Slider {...sliderSettings} className="trending-list">
          {trendFilms.map((film) => (
            <div key={film.id} className="trending-item-slide">
              <Link className="trending-item-link" to={`/filmPage/${film.id}`}>
                <Film film={film} />
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      <div className="continue-watching content">
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
    </div>
  )
}
