import React from 'react';
import Button from './Button';
import './Start.css';
import { Link } from 'react-router-dom';

function Start() {
    return (
        <div>
            <div className="start-wrapper">
                <div className="start-container">
                    <div className="start-header">
                        <h1>Let's start!</h1>
                        <p>『ポケモン GO』をはじめよう！</p>
                    </div>
                    <div className="download">
                        <Link to="#"><img className="google" src="/images/bnr_google_play.png" alt=""/></Link>
                        <Link to="#"><img className="app-store" src="/images/bnr_app_store.png" alt=""/></Link>
                    </div>
                    <Button className="how-to-download" link="#" btnStyle="btn-primary" title="ダウンロード方法" />
                </div>
            </div>
        </div>
    )
}

export default Start;
