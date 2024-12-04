import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LogoIcon } from '../../../shared/icons/Logo/LogoIcon'
import { AuthButton } from '../../../shared/ui/Buttons/AuthButton';

export const SignUp = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    return (
        <div className="signup">
            <div className="signup__close-btn" onClick={() => navigate("/")}>
                <svg viewBox="0 0 384 512" fill="white">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </div>
            <div className="signup__logo">
                <LogoIcon />
            </div>
            <h2 className="signup__title">Please complete a simple registration</h2>
            <form className="signup__form">
                <label>
                    Full name:
                    <input
                        type="text"
                        value={name}
                        placeholder="Enter your full name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Enter email address:
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter email here"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Enter password:
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter password here"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Repeat password:
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter password here"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <AuthButton
                    className="signup__btn">
                        Sign Up
                </AuthButton>
            </form>
        </div>
    )
}
