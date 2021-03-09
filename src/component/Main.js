import React from 'react';
import Hero from './Hero';
import News from './News';
import Play from './Play';
import Start from './Start';
import BottomNav from './BottomNav';
import './Main.css';

class Main extends React.Component {
    render() {
  
        return (
            <div>
                <div className="bg-full1">
                <Hero />
                <News />
                </div>
                <div className="bg-full2">
                <Play />
                </div>
                <div className="bg-full3">
                <Start />
                </div>
                <BottomNav />
            </div>
        )
    }
}

export default Main;
