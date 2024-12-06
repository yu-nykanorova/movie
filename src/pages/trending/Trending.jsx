import { Header } from "../../shared/ui/Header/Header";
import { Film } from "../../shared/ui/Film/Film";
import { FilmData } from "../../shared/ui/Film/FilmData";
import { films } from "../../database/films";
import { useState, useEffect } from "react";

export const Trending = () => {
    const trendFilms = films.filter((film) => film.isTrend);
    const [selectedFilm, setSelectedFilm] = useState(trendFilms[0]);

    useEffect(() => {
        setSelectedFilm(trendFilms[0]);
    }, []);

    const handleFilmClick = (film) => {
        setSelectedFilm(film);
    };

    return (
        <>
            <Header />
            <div className="trending">
                <div className="trend-title">Trending at this moment</div>
                <div className="trending-list">
                    {trendFilms.map((film) => (
                        <div
                            key={film.id}
                            onClick={() => handleFilmClick(film)}
                            className={film.id === selectedFilm.id ? "" : "is-active-trend-film"}
                        >
                            <Film film={film} />
                        </div>
                    ))}
                </div>
            </div>

            <div>
                {selectedFilm && <FilmData film={selectedFilm} />}
            </div>
            
        </>
    )
}