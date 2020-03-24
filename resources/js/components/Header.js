import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isLoggedIn, setisLoggedIn] = useState(false)

    return (
        <div>
            <ul>
                <li> <Link to="/">Ana sayfa</Link> </li>
                <li className="login"> <Link to="/kayit-ol">Kayıt Ol</Link> </li>
                <li className="login"> <Link to="/giris">Giriş Yap</Link> </li>
                <li> <Link to="/icerik">İçerik Sayfası</Link> </li>
                <li className="login"> <Link to="/">Çıkış Yap</Link> </li>
            </ul>
        </div>
    );
}

export default Header;


