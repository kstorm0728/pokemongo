import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <div className="footer-wrapper">
                <div className="page-top">
                    <span><i className="fas fa-chevron-circle-up fa-4x icon-color"></i></span>
                </div>
                <div className="footer-container">
                    <div className="footer-menu">
                        <ul className="menu">
                            <li className="menu-item"><Link to="#">Pokémon GO Plus/モンスターボールPlus</Link></li>
                            <li className="menu-item"><Link to="#">ポケットモンスターオフィシャルサイト</Link></li>
                            <li className="menu-item"><Link to="#">ポケモンだいすきクラブ</Link></li>
                        </ul>
                    </div>
                    <div className="sns">
                        <h4>『ポケモン GO』公式 SNS</h4>
                        <ul className="sns-menu">
                            <li className="sns-item"><Link to="#"><img src="/images/icon_tw.svg" alt=""/></Link></li>
                            <li className="sns-item"><Link to="#"><img src="/images/icon_fb.svg" alt=""/></Link></li>
                            <li className="sns-item"><Link to="#"><img src="/images/icon_yt.svg" alt=""/></Link></li>
                            <li className="sns-item"><Link to="#"><img src="/images/icon_ig.svg" alt=""/></Link></li>
                        </ul>
                    </div>
                    <div className="company">
                        <ul className="company-menu">
                            <li className="pokemon"><Link to="#"><img src="/images/logo_pokemon.svg" alt=""/></Link></li>
                            <li className="niantic"><Link to="#"><img src="/images/logo_niantic.svg" alt=""/></Link></li>
                            <li className="nintendo"><Link to="#"><img src="/images/logo_nintendo.svg" alt=""/></Link></li>
                        </ul>
                    </div>
                    <div className="copyright">
                        <p>©2021 Niantic, Inc. ©2021 Pokémon. ©1995-2021 Nintendo/Creatures Inc. /GAME FREAK inc.
                            <br />
                            ポケモン・Pokémonは任天堂・クリーチャーズ・ゲームフリークの登録商標です。
                            <br />
                            ※AppleとAppleのロゴは米国および他の国々で登録されたApple Inc.の商標です。App Storeは、Apple Inc.のサービスマークです。
                            <br />
                            ※Google Play および Google Play ロゴは、Google LLC の商標です。※画面は開発中のものです。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
