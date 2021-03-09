import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

function App() {
    return (
        <>
        <Router>
            <Header />
            <Main />
            <Footer />
            <Switch>
                {/* <Route path="/" exact component={Home} />
                <Route path="/about" component={About} /> */}
            </Switch>
        </Router>
        </>
    );
}

export default App;
