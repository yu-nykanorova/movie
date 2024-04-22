import { HeartWhiteIcon } from "../../icons/HeartWhite/HeartWhiteIcon";
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
                    <div className="menu-item">
                        <NavLink to="/favorites"><HeartWhiteIcon /></NavLink>
                        <p>Favourites</p>
                    </div>
                </div>
                <div className="sidebar-menu__social">

                </div>
                <div className="sidebar-menu__settings">

                </div>
                
            </div>
            
        </div>
    )
}