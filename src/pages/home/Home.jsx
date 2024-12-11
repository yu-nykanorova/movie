import React, { useContext } from "react";
import { Header } from "../../shared/ui/Header/Header";
import { Film } from "../../shared/ui/Film/Film";
import { Link } from "react-router-dom";
import { WatchNow } from "../../shared/ui/Buttons/WatchNow";
import { LikeButtonEmpty } from "../../shared/ui/Buttons/LikeButtonEmpty";
import { LikeButtonFilled } from "../../shared/ui/Buttons/LikeButtonFilled";
import { FilmsContext } from "../../shared/FilmsContext";
import { Swiper, SwiperSlide } from "swiper/react";

export const Home = () => { 
  const { films, toggleFavorite } = useContext(FilmsContext);

  const trendFilms = films.filter((film) => film.isTrend);
  const mainPoster = films.find((film) => film.title === "Insider");
  const isWatchingFilms = films.filter((film) => film.isWatching);

  if (!films || films.length === 0) {
    return <p>Loading films...</p>;
  }
  
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
        <div className="trending__title">Trending</div>
        <Swiper
          loop={true}
          spaceBetween={0} // Расстояние между слайдами
          slidesPerView={4} // Количество видимых слайдов
          navigation // Включает кнопки "вперед/назад"
          pagination={{ clickable: true }} // Точки навигации
          breakpoints={{
            1440: { slidesPerView: 4 },
            1200: { slidesPerView: 3 },
            992: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            576: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
        >
          {trendFilms.map((film) => (
            <SwiperSlide key={film.id}>
              <Link className="trending__item-link" to={`/filmPage/${film.id}`}>
                <Film film={film} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
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
