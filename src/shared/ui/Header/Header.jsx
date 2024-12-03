import { useState } from "react";
import { Link } from "react-router-dom";
import { BellIcon } from "../../icons/BellIcon/BellIcon";
import { SearchIcon } from "../../icons/SearchIcon/SearchIcon";
import { Search } from "../Search/Search";

export const Header = () => {
  const [activeSearch, setActiveSearch] = useState(false);

  const handleOnSearchIcon = () => {
    if (!activeSearch) {
      setActiveSearch(true);
    }
  }

  return (
    <div className="header">
        <div className="header-menu">
          <Link className="header-menu__link" to="/">Movies</Link>
          <Link className="header-menu__link" to="/">Series</Link>
          <Link className="header-menu__link" to="/">Documentaries</Link>
        </div>
        <div className="ml-auto header-info">
            {activeSearch ?
              <Search /> :
              <SearchIcon className="search-icon" onClick={handleOnSearchIcon}/>
            }
            <BellIcon className="bell-icon" />
            <div className="header-info__user">
              <div className="user-icon">
                <img src="src/assets/img/user.png" alt="user" />
              </div>
              <p className="user-name">Tetiana</p>
            </div>
        </div>      
    </div>
  )
} 

