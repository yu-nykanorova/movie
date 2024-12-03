import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { films } from "../../../database/films";
import { SearchIcon } from "../../icons/SearchIcon/SearchIcon";

export const Search = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
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
        } else {
            setResults([]);
        }
    };

    const goToFilmPage = (filmId) => {
        navigate(`/filmpage/${filmId}`);
    };

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Enter movie name"
                value={query}
                onChange={handleInputChange}
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
                                goToFilmPage(film.id);
                            }}
                        >
                            {film.title}
                        </li>
                    ))}
                </ul>
            )}
            <SearchIcon className="search-icon search__icon-btn"/>
        </div>
    );
};
