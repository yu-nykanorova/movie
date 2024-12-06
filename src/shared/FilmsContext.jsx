import React, { createContext, useState, useEffect } from "react";
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

    return (
        <FilmsContext.Provider value={{ films, toggleFavorite }}>
            {children}
        </FilmsContext.Provider>
    );
};