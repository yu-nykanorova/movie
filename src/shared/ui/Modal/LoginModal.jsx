import React, { useState, useRef, useEffect } from "react";
import { AuthButton } from "../Buttons/AuthButton";

export const LoginModal = ({ onLogin, onClose }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            onLogin();
        } else {
            alert("Please enter required data");
        }
    };

  return (
    <div className="login-modal">
        <div className="login-modal__content">
            <div className="login-modal__close-btn" onClick={onClose}>
                <svg viewBox="0 0 384 512" fill="black">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </div>
            <h2 className="login-modal__title">Log In</h2>
            <p className="login-modal__comment">(Enter any letters into Username and Password fields and click "Log in")</p>
            <form className="login-modal__form" name="login_form" onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        ref = {inputRef}
                        type="text"
                        value={username}
                        placeholder="Enter username here"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter password here"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <AuthButton
                    className="login-modal__submit-btn"
                    type="submit" >
                        Log In
                </AuthButton>
            </form>
        </div>
    </div>
  )
}
