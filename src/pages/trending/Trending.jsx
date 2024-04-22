import { Header } from "../../shared/ui/Header/Header";
import { Film } from "../../shared/ui/Film/Film";
import { films } from "../../database/films";

export const Trending = () => {
    const trendFilms = films.filter((film) => film.isTrend);
    const listItems = trendFilms.map((film) => <Film key={film.id} film={film} />);

    return (
        <>
            <Header />
            <div className="trending">
                <div className="title">Trending</div>
                <div className="trending-list">
                    {listItems}
                </div>
            </div>
            <div className="main-trend">
                <div className="main-trend__image">
                    <img src="" alt="" />
                </div>
                <div className="main-trend__info">
                    <div className="main-trend__title">
                        <h3></h3>
                        <div className="raiting">
                            
                        </div>
                    </div>
                    <div className="main-trend__info-data">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div className="main-trend__desc">

                    </div>
                    <div className="main-trend__btn">
                        <button className="main-trend__btn-watch">Watch now</button>
                        <button className="main-trend__btn-like"></button>
                    </div>
                </div>
            </div>
        </>
    )
}