import { FilmIcon } from "../../icons/FilmIcon/FilmIcon";
import { HeartWhiteIcon } from "../../icons/HeartWhiteIcon/HeartWhiteIcon";
import { TrendingUpIcon } from "../../icons/TrendingUpIcon/TrendingUpIcon";
import { CalendarIcon } from "../../icons/CalendarIcon/CalendarIcon";
import { LogoIcon } from "../../icons/Logo/LogoIcon";
import { NavLink, Link } from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <Link to="/"><LogoIcon /></Link>
            </div>
            <div className="sidebar-menu">
                <div className="sidebar-menu__main">
                    <NavLink to="/" className={({ isActive }) => isActive ? "menu-item is-active" : "menu-item"}>
                        <FilmIcon /> 
                        <p>Home</p>
                    </NavLink>
                    <NavLink to="/favorites" className={({ isActive }) => isActive ? "menu-item is-active" : "menu-item"}>
                        <HeartWhiteIcon />
                        <p>Favourites</p>
                    </NavLink>
                    <NavLink to="/trending" className={({ isActive }) => isActive ? "menu-item is-active" : "menu-item"}>
                        <TrendingUpIcon />
                        <p>Trending</p>
                    </NavLink>
                    <NavLink to="/coming" className={({ isActive }) => isActive ? "menu-item is-active" : "menu-item"}>
                        <CalendarIcon />
                        <p>Coming soon</p>
                    </NavLink>
                </div>
                <div className="sidebar-menu__social">

                </div>
                <div className="sidebar-menu__settings">

                </div>
                
            </div>
            
        </div>
    )
}