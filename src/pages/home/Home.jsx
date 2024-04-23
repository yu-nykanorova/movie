import { Header } from "../../shared/ui/Header/Header"
import { Film } from "../../shared/ui/Film/Film";
import { films } from "../../database/films";

export const Home = () => { 
  const trendFilms = films.filter((film) => film.isTrend);
  const listItems = trendFilms.map((film) => <Film key={film.id} film={film} />);
  
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

