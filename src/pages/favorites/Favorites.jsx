<<<<<<< HEAD
import { Header } from "../../shared/ui/Header/Header";
import { Film } from "../../shared/ui/Film/Film";
import { films } from "../../database/films";

export const Favorites = () => {
  const favoriteFilms = films.filter((film) => film.isFavorited);
  const listItems = favoriteFilms.map((film) => <Film key={film.id} film={film} />);

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

=======
import { Header } from "../../shared/ui/Header/Header";
import { Film } from "../../shared/ui/Film/Film";
import { films } from "../../database/films";

export const Favorites = () => {
  const favoriteFilms = films.filter((film) => film.isFavorited);
  const listItems = favoriteFilms.map((film) => <Film key={film.id} film={film} />);

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

>>>>>>> ea9b5e5fc51b3d5bf85c1cb30654ebff3ccf8fa2
