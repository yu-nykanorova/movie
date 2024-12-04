import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { films } from "../../../database/films";
import { GoToIcon } from "../../icons/GoToIcon/GoToIcon";

export const Search = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [searchError, setSearchError] = useState(false);
    const [focused, setFocused] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim()) {
            const filteredFilms = films.filter((film) =>
                film.title &&
                film.title.toLowerCase().includes(value.toLowerCase())
            );
            setResults(filteredFilms);
            setSearchError(filteredFilms.length === 0);
        } else {
            setResults([]);
            setSearchError(false);
        }
        setSelectedFilm(null);
    };

    const goToFilmPage = (filmId) => {
        navigate(`/filmpage/${filmId}`);
    };

    const handleSearchIconClick = () => {
        if (selectedFilm) {
            goToFilmPage(selectedFilm.id);
        }
    };

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Enter movie name"
                value={query}
                onChange={handleInputChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className={`${searchError ? "error" : focused ? "focused" : ""}`}
            />
            {results.length > 0 && (
                <ul className="search__results">
                    {results.map((film) => (
                        <li
                            className="search__results-item"
                            key={film.id}
                            onClick={() => {
                                setQuery(film.title);
                                setResults([]);
                                setSelectedFilm(film);
                                setSearchError(false);
                            }}
                        >
                            {film.title}
                        </li>
                    ))}
                </ul>
            )}
            <GoToIcon
                className="search-icon search__icon-btn"
                onClick={handleSearchIconClick}
            />
        </div>
    );
};
