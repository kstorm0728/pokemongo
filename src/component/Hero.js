import React, { useState, useEffect } from 'react';
import './Hero.css';
import Button from './Button';
import { Link } from 'react-router-dom';
import { ReactComponent } from 'react';

class Hero extends React.Component {
    render() {

        return (
            <div className="hero-wrapper">
                <div className="hero-container">
                    <img className="logo" src="/images/logo.png"/>
                    <p className="lets-start">『ポケモン GO』をはじめよう！</p>
                    <Button className="how-to-download" link="/download" btnStyle="btn-primary" title="ダウンロード方法" />
                    <Button className="how-to-play" link="/how-to-play" btnStyle="btn-primary" title="遊び方" />
                    <p className="download-here">アプリのダウンロードはこちらから</p>
                    <ul className="download">
                        <li><Link to="#"><img className="google" src="/images/bnr_google_play.png" /></Link></li>
                        <li><Link to="#"><img className="app-store" src="/images/bnr_app_store.png" /></Link></li>
                    </ul>
                    <ul className="navbar">
                        <li className="nav-item"><Link to="#">お知らせ</Link></li>
                        <li className="nav-item"><Link to="#">ダウンロード方法</Link></li>
                        <li className="nav-item"><Link to="#">基本の遊び方</Link></li>
                        <li className="nav-item"><Link to="#">機能の紹介</Link></li>
                        <li className="nav-item"><Link to="#">利用上のご注意</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Hero;
