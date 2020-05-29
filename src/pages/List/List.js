import React, { Component } from 'react';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import './List.scss';

class List extends Component {
    render() {
        return (
            <>
            <div>List page</div>
            <Header />
            <div></div>
            <Footer />
            </>
        );
    }
}

export default List;