import React, { useContext } from "react";
import { Header } from "../../shared/ui/Header/Header";
import { Film } from "../../shared/ui/Film/Film";
import { Link } from "react-router-dom";
import { FilmsContext } from "../../shared/FilmsContext";

export const Favorites = () => {
  const { films } = useContext(FilmsContext);
  const favoriteFilms = films.filter((film) => film.isFavorited);

  return (
    <div className="favorites-page">
      <Header />
      <div className="favorites">
        <div className="favorites-title">Favorites</div>
        <div className="favorites-list">
          {favoriteFilms.map((film) => (
            <Link
              key={film.id}
              to={`/filmPage/${film.id}`}
            >
              <Film film={film} />
            </Link>
            ))}
        </div>
      </div>
      
    </div>
  );
};
