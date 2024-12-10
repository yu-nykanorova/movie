import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { BellIcon } from "../../icons/BellIcon/BellIcon";
import { SearchIcon } from "../../icons/SearchIcon/SearchIcon";
import { Search } from "../Search/Search";
import userIcon from "/assets/img/user.png";

export const Header = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const searchRef = useRef(null);

  const handleOnSearchIcon = () => {
    setActiveSearch(true);
  };

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setActiveSearch(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setActiveSearch(false);
    }
  }

  useEffect(() => {
    if (activeSearch) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSearch]);

  return (
    <div className="header">
      <div className="header__burger">
        <span></span>
      </div>
      <div className="header__menu">
        <Link className="header__menu-link" to="/">Movies</Link>
        <Link className="header__menu-link" to="/">Series</Link>
        <Link className="header__menu-link" to="/">Documentaries</Link>
      </div>
      <div className="ml-auto header__info">
          {activeSearch ? (
            <div ref={searchRef}>
              <Search />
            </div>
          ) : (
            <SearchIcon className="search-icon" onClick={handleOnSearchIcon}/>
          )}
          <BellIcon className="bell-icon" />
          <div className="header__info-user">
            <div className="user-icon">
              <img src={userIcon} alt="user" />
            </div>
            <p className="user-name">Tetiana</p>
          </div>
      </div>      
    </div>
  )
} 

