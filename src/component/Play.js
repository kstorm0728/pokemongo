import React from 'react';
import Button from './Button';
import './Play.css';
import { Link } from 'react-router-dom';

function Play(props) {
    return (
        <div>
            <div className="lets-go-wrapper">
                <div className="lets-go-container">
                    <div className="lets-go-header">
                        <div className="lets-go-header-title">
                            <h1>Let's GO!</h1>
                            <p>楽しみ方いろいろ！<br />自分にあった遊び方をみつけよう</p>
                        </div>
                        <Button className="lets-go-header-btn" link="/" btnStyle="btn-secondary" title="もっと見る" />
                    </div>
                    <div className="btn-list">
                        <ul className="btn-items">
                            <li>
                                <Button className="item" link="/" btnStyle="btn-item item1" title="『ポケモンGO』とは？" itemImg="/images/poke_play01.png" />
                            </li>
                            <li>
                                <Button className="item" link="/" btnStyle="btn-item item2" title="「ポケモン」を見つけて捕まえよう！" itemImg="/images/poke_play02.png" />
                            </li>
                            <li>
                                <Button className="item" link="/" btnStyle="btn-item item3" title="「フィールドマップ」を確認してみよう！" itemImg="/images/poke_play03.png" />
                            </li>
                            <li>
                                <Button className="item" link="/" btnStyle="btn-item item4" title="「ポケストップ」でアイテムを手に入れよう！" itemImg="/images/poke_play04.png" />
                            </li>
                            <li>
                                <Button className="item" link="/" btnStyle="btn-item item5" title="「ジムバトル」に挑戦しよう" itemImg="/images/poke_play05.png" />
                            </li>
                            <li>
                                <Button className="item" link="/" btnStyle="btn-item item6" title="「レイドバトル」に挑戦しよう" itemImg="/images/poke_play06.png" />
                            </li>
                            <li>
                                <Button className="item" link="/" btnStyle="btn-item item7" title="『ポケモンGO』の楽しみ方" itemImg="/images/poke_play07.png" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Play;
