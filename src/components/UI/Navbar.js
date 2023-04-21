import React from 'react';
import {Link, useHistory} from "react-router-dom";

const Navbar = () => {
    const router = useHistory()

    const logout = () => {
        router.push('/reg')
    }
    const login = () => {
        router.push('/log')
    }

    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to="/board" >Доска</Link>
                <Link to="/profile" >Профиль</Link>
                <button onClick={logout}>Выйти</button>
                <button onClick={login}>Войти</button>
            </div>
        </div>
    );
};

export default Navbar;