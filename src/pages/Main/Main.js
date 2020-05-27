import React, { Component } from 'react';
import './Main.scss';
import Footer from '../../../src/components/Footer/Footer';

class Main extends Component {
    render() {
        return (
            <div className="Main">
            <div>Main page</div>
            <Footer/>
            </div>
        );
    }
}

export default Main;