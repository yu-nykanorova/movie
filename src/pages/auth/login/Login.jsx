import { useState } from "react"
import { NavLink } from "react-router-dom"
import { LogoIcon } from "../../../shared/icons/Logo/LogoIcon"
import { AuthButton } from "../../../shared/ui/Buttons/AuthButton"
import { LoginModal } from "../../../shared/ui/Modal/LoginModal"

export const Login = ({ onLogin }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleLoginSuccess = () => {
    onLogin();
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  }
  const handleCloseModal = () => {
    setModalOpen(false);
  }

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <LogoIcon/>
        </div>
        <p className="login__slogan">Enjoy the newest movies</p>
        <AuthButton
          className="btn-auth login__button"
          onClick={handleOpenModal}
        >
        Log In
        </AuthButton>
        <p className="login__no-account">No account? <NavLink to="/signup" className="login__create-account">Sign up</NavLink></p>
      </div>
      {modalOpen && (
        <LoginModal onLogin={handleLoginSuccess} onClose={handleCloseModal}/>
      )}
    </div>
  )
}

