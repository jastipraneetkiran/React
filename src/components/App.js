import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './BaseComponents/Header';
export default function App(){
    function getPage (){
        const route = window.location.pathname;
        if(route === "/about") {
            return <AboutPage />
        } else {
            return <HomePage />
        }
    }
    return (
        <div className ='container-fluid'>
            <Header />
            {getPage()}
        </div>
    )

}