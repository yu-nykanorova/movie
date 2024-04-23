import { NavLink, Link } from "react-router-dom";
import { BellIcon } from "../../icons/BellIcon/BellIcon";
import { SearchIcon } from "../../icons/SearchIcon/SearchIcon";


export const Header = () => {
  return (
    <div className="header">
        <div className="header-menu">
          <NavLink className="header-menu__link" to="/">Movies</NavLink>
          <Link className="header-menu__link" to="/">Series</Link>
          <Link className="header-menu__link" to="/">Documentaries</Link>
        </div>
        <div className="ml-auto header-info">
            <SearchIcon className="search-icon" />
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

