import { useState, useEffect } from "react";
import { FilmData } from "../../shared/ui/Film/FilmData";
import { films } from "../../database/films";
import { useParams } from "react-router-dom";

export const FilmPage = () => {
    const { id } = useParams();

    const film = films.find(item => item.id === parseInt(id));
    if (!film) return <h1>Film not found</h1>

    return (
        <>
            {film && <FilmData film={film} />}
        </>
  );
}
