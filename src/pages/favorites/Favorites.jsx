import React, { useContext, useMemo } from "react";
import { Header } from "../../shared/ui/Header/Header";
import { Film } from "../../shared/ui/Film/Film";
import { Link } from "react-router-dom";
import { FilmsContext } from "../../shared/FilmsContext";

export const Favorites = () => {
  const { films } = useContext(FilmsContext);
  const favoriteFilms = useMemo(() => {
    films.filter((film) => film.isFavorited);
  }, [films]);

  return (
    <div className="favorites-page">
      <Header />
      <div className="favorites content">
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
