import { useState, useEffect } from "react"; 
import { FilmIcon } from "../../icons/FilmIcon/FilmIcon";
import { HeartWhiteIcon } from "../../icons/HeartWhiteIcon/HeartWhiteIcon";
import { TrendingUpIcon } from "../../icons/TrendingUpIcon/TrendingUpIcon";
import { CalendarIcon } from "../../icons/CalendarIcon/CalendarIcon";
import { Logo } from "../../icons/Logo/Logo";
import { LogoIcon } from "../../icons/Logo/LogoIcon";
import { NavLink, Link } from "react-router-dom";
import { CommunityIcon } from "../../icons/CommunityIcon/CommunityIcon";
import { SocialIcon } from "../../icons/SocialIcon/SocialIcon";
import { SettingsIcon } from "../../icons/SettingsIcon/SettingsIcon";
import { LogOutIcon } from "../../icons/LogOutIcon/LogOutIcon";

export const Sidebar = ({ onLogout }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <Link to="/">
                    {isSmallScreen ? <LogoIcon /> : <Logo />}
                </Link>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__menu-main">
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
                <div className="sidebar__menu-social">
                    <NavLink to="/community" className={({ isActive }) => isActive ? "menu-item is-active" : "menu-item"}>
                        <CommunityIcon />
                        <p>Community</p>
                    </NavLink>
                    <NavLink to="/social" className={({ isActive }) => isActive ? "menu-item is-active" : "menu-item"}>
                        <SocialIcon />
                        <p>Social</p>
                    </NavLink>
                </div>
                <div className="sidebar__menu-settings">
                    <NavLink to="/settings" className={({ isActive }) => isActive ? "menu-item is-active" : "menu-item"}>
                        <SettingsIcon />
                        <p>Settings</p>
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) => isActive ? "menu-item is-active" : "menu-item"}
                        onClick={onLogout}
                    >
                            <LogOutIcon />
                            <p>Logout</p>
                    </NavLink>
                </div>   
            </div>  
        </div>
    )
}