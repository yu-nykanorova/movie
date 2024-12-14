import { useContext, useMemo } from "react";
import { FilmData } from "../../shared/ui/Film/FilmData";
import { useParams } from "react-router-dom";
import { FilmsContext } from "../../shared/FilmsContext";

export const FilmPage = () => {
    const { films } = useContext(FilmsContext);
    const { id } = useParams();

    const film = useMemo(() => {
        return films.find((f) => f.id === parseInt(id));
    }, [films, id]);
    
    return film ? <FilmData filmId={film.id} /> : <h1>Film not found</h1>;
}
