import React from 'react';
import './BottomNav.css';
import { Link } from 'react-router-dom';

function BottomNav() {
    return (
        <div>
            <div className="bottom-nav">
                <ul className="bottom-nav-list">
                    <Link to="/news"><li>お知らせ</li></Link>
                    <Link to="/how-to-download"><li>ダウンロード方法</li></Link>
                    <Link to="/how-to-play"><li>基本の遊び方</li></Link>
                    <Link to="/function"><li>機能の紹介</li></Link>
                    <Link to="/notification"><li>利用上のご注意</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default BottomNav;
