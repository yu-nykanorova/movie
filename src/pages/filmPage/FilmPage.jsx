import { useContext } from "react";
import { FilmData } from "../../shared/ui/Film/FilmData";
import { useParams } from "react-router-dom";
import { FilmsContext } from "../../shared/FilmsContext";

export const FilmPage = () => {
    const { films } = useContext(FilmsContext);
    const { id } = useParams();

    const film = films.find((f) => f.id === parseInt(id));
    
    if (!film) return <h1>Film not found</h1>

    return (
        <>
            {film && <FilmData filmId={film.id} />}
        </>
  );
}
