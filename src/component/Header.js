import React, {useState, useEffect} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function Header() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src="images/logo_s.png" className="navbar-img" />
                    </Link>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                お知らせ
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/how-to-download" className="nav-links" onClick={closeMobileMenu}>
                                ダウンロード方法
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/how-to-play" className="nav-links" onClick={closeMobileMenu}>
                                基本の遊び方
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/functions" className="nav-links" onClick={closeMobileMenu}>
                                機能の紹介
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/notification" className="nav-links" onClick={closeMobileMenu}>
                                利用上のご注意
                            </Link>
                        </li>
                        <div className={click ? "download active" : "download"}>
                            <p>アプリの無料ダウンロードはこちらから</p>
                            <ul>
                                <li><Link to="#"><img className="google" src="/images/bnr_google_play.png" /></Link></li>
                                <li><Link tp="#"><img className="app-store" src="/images/bnr_app_store.png" /></Link></li>
                            </ul>
                        </div>
                    </ul>
                    
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
