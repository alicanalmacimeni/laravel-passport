import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Header() {
    const [isLoggedIn, setisLoggedIn] = useState(false)

    function changeisLoggedIn() {
        console.log("buraya geldiiiiiiiiiiiii............")
    }

    function handleClick() {
        Axios.delete('/api/auth/cikis').then(res =>
            console.log(res.data)
        )
    }

    return (
        <div>
            <ul>
                <li> <Link to="/">Ana sayfa</Link> </li>
                <li className="login"> <Link to="/kayit-ol">Kayıt Ol</Link> </li>
                <li className="login"> <Link to={{ pathname: "/giris", degistir: { changeisLoggedIn } }} >Giriş Yap</Link> </li>
                <li> <Link to="/icerik">İçerik Sayfası</Link> </li>
                <li className="login"> <Link to="#" onClick={handleClick}>Çıkış Yap</Link> </li>
            </ul>
        </div>
    );
}

export default Header;


