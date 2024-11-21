import React, { useState } from 'react'
import { LogoIcon } from '../../../shared/icons/Logo/LogoIcon'

export const SignUp = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="signup">
            <div className="signup__logo">
                <LogoIcon />
            </div>
            <h2 className="signup__title">Sign Up</h2>
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
                <button
                    type="submit"
                    className="btn signup__btn"
                    //onClick={handleSubmit}
                >
                Sign Up
                </button>
            </form>
        </div>
    )
}
