import { Header } from "../../shared/ui/Header/Header"
import { Film } from "../../shared/ui/Film/Film";
import { films } from "../../database/films";
import { Link } from "react-router-dom";

export const Home = () => { 
  const trendFilms = films.filter((film) => film.isTrend);
  const listItems = trendFilms.map((film) => (
    <Link key={film.id} to={`/filmPage/${film.id}`}>
      <Film film={film} />
    </Link>
  ));
  
  return (
    <>
        <Header />
        <div className="trending">
                <div className="trend-title">Trending</div>
                <div className="trending-list">
                    {listItems}
                </div>
            </div>
    </>
  )
}
