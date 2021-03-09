import React from 'react';
import Button from './Button';
import './News.css';
import Box from './Box';
import { Link } from 'react-router-dom';
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function News() {
    return (
        <div className="news-wrapper">
            <div className="news-inner">
                <div className="news-container">
                    <div className="news-wrapper-title">
                        <h1>お知らせ</h1>
                        <p>NEWS</p>
                    </div>
                    <div className="upper-box">
                        <div className="upper-left">
                            <Box 
                                boxStyle="box box1 category-event"
                                boxImg="/images/box-img1.jpg"
                                categoryColor="orange"
                                category="イベント"
                                date="2021.02.18"
                                title="「カントーセレブレーション」がやってきます！"
                            />
                        </div>
                        <div className="upper-right">
                            <Box
                                boxStyle="box box2 category-event"
                                boxImg="/images/box-img2.jpg"
                                categoryColor="orange"
                                category="イベント"
                                date="2021.02.10"
                                title="「Pokemon GO バレンタイン」開催！"
                            />
                        </div>
                    </div>
                    <div className="lower-box">
                        <div className="box3">
                            <Box
                                className="box-item"
                                boxStyle="box category-event"
                                boxImg="/images/box-img3.jpg"
                                categoryColor="orange"
                                category="イベント"
                                date="2021.02.01"
                                title="『ポケモン GO』２月のイベント"
                            />
                        </div>
                        <div className="box4">
                            <Box
                                className="box-item"
                                boxStyle="box category-event"
                                boxImg="/images/box-img4.jpg"
                                categoryColor="blue"
                                category="アップデート"
                                date="2020.08.28"
                                title="『ポケモン GO』に「メガシンカ」が登場！"
                            />
                        </div>
                        <div className="box5">
                            <Box
                                className="box-item"
                                boxStyle="box category-event"
                                boxImg="/images/noimage.png"
                                categoryColor="red"
                                category="重要なお知らせ"
                                date="2017.07.19"
                                title="【追記あり】アップデート時に初期化されたようにみえる場合の回避方法"
                            />
                        </div>
                    </div>
                </div>
                <div className="info-more">
                    <Button 
                        className=""
                        link="/info-more"
                        btnStyle="btn-secondary"
                        title="もっと見る"
                    />
                </div>
                <div className="twitter">
                    <TwitterTimelineEmbed
                        className="twitter-timeline"
                        sourceType="profile"
                        screenName="PokemonGOAppJP"
                        theme="light"
                        options={{ width: 600, height: 300 }}
                    />
                    <Button 
                        className="follow-twitter"
                        link="https://twitter.com/PokemonGOAppJP"
                        btnStyle="btn-secondary"
                        title="Twitterをフォローする"
                    />
                    <img src="/images/poke_twwidget.png" />
                </div>
            </div>
        </div>
    )
}

export default News;
