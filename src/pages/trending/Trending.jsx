import { Header } from "../../shared/ui/Header/Header";
import { Film } from "../../shared/ui/Film/Film";
import { FilmData } from "../../shared/ui/Film/FilmData";
import { useState, useEffect, useContext, useMemo } from "react";
import { FilmsContext } from "../../shared/FilmsContext";

export const Trending = () => {
    const { films } = useContext(FilmsContext);
    const trendFilms = useMemo(() => films?.filter((film) => film.isTrend), [films]);
    const [selectedFilm, setSelectedFilm] = useState(null);

    useEffect(() => {
        if (trendFilms.length > 0) {
            setSelectedFilm(trendFilms[0]);
        }        
    }, [trendFilms]);

    const handleFilmClick = (film) => {
        setSelectedFilm(film);
    };

    return (
        <div className="trending-page">
            <Header />
            <div className="trending content">
                <div className="trending__title">Trending at this moment</div>
                <div className="trending__list">
                    {trendFilms.map((film) => (
                        <div
                            key={film.id}
                            onClick={() => handleFilmClick(film)}
                            className={film.id === selectedFilm?.id ? "" : "is-active-trend-film"}
                        >
                            <Film film={film} />
                        </div>
                    ))}
                </div>
            </div>

            <div>
                {trendFilms.length > 0 && selectedFilm && (
                    <FilmData filmId={selectedFilm.id} />
                )}
            </div>
            
        </div>
    )
}