import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { BellIcon } from "../../icons/BellIcon/BellIcon";
import { SearchIcon } from "../../icons/SearchIcon/SearchIcon";
import { Search } from "../Search/Search";
import userIcon from "/assets/img/user.png";

export const Header = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeBurgerMenu, setActiveBurgerMenu] = useState(false);
  const searchRef = useRef(null);
  const menuRef = useRef(null);

  const handleOnSearchIcon = () => {
    setActiveSearch(true);
  };

  const handleOnBurger = () => {
    setActiveBurgerMenu(true);
  };

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setActiveSearch(false);
    }

    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setActiveBurgerMenu(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setActiveSearch(false);
      setActiveBurgerMenu(false);
    }
  }

  useEffect(() => {
    if (activeSearch || activeBurgerMenu) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } 

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSearch, activeBurgerMenu]);

  return (
    <div className="header">
      <div className="header__burger" onClick={handleOnBurger}>
        <span></span>
      </div>
      <div className={activeBurgerMenu ? "header__menu active-menu" : "header__menu"} ref={menuRef}>
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

