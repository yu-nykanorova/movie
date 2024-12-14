import React, { createContext, useState, useEffect, useMemo } from "react";
import { films as initialFilms } from "../database/films";

export const FilmsContext = createContext();

export const FilmsProvider = ({ children }) => {
    const [films, setFilms] = useState(() => {
        const savedFilms = localStorage.getItem("films");
        return savedFilms ? JSON.parse(savedFilms) : initialFilms;
    });

    useEffect(() => {
        localStorage.setItem("films", JSON.stringify(films));
    }, [films]);

    const toggleFavorite = (id) => {
        setFilms((prevFilms) =>
            prevFilms.map((film) =>
                film.id === id ? { ...film, isFavorited: !film.isFavorited } : film
            )
        );
    };

    const value = useMemo(() => ({ films, toggleFavorite }), [films, toggleFavorite]);

    return (
        <FilmsContext.Provider value={value}>
            {children}
        </FilmsContext.Provider>
    );
};