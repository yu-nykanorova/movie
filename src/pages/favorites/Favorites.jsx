import { Header } from "../../shared/ui/Header/Header";
import { Film } from "../../shared/ui/Film/Film";
import { films } from "../../database/films";
import { Link } from "react-router-dom";

export const Favorites = () => {
  const favoriteFilms = films.filter((film) => film.isFavorited);
  const listItems = favoriteFilms.map((film) => (
  <Link key={film.id} to={`/filmPage/${film.id}`}>
    <Film film={film} />
  </Link>
  ));

  return (
    <>
      <Header />
      <div className="favorites">
        <div className="favorites-title">Favorites</div>
        <div className="favorites-list">
          {listItems}
        </div>
      </div>
      
    </>
  );
};
