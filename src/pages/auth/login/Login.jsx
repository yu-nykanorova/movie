import { NavLink } from "react-router-dom"
import { LogoIcon } from "../../../shared/icons/Logo/LogoIcon"
import { LogInButton } from "../../../shared/ui/Buttons/LogInButton"

export const Login = ({ onLogin }) => {
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <LogoIcon/>
        </div>
        <p className="login__slogan">Enjoy the newest movies</p>
        <LogInButton
          className="btn-login login__button"
          onClick={onLogin}
        />
        <p className="login__no-account">No account? <NavLink className="login__create-account">Sign up</NavLink></p>
      </div>
    </div>
  )
}

