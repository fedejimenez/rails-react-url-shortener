import React from 'react';
import axios from 'axios';

import './style.css'
import Header from './Header';
import Footer from './Footer';
import Shortly from './Shortly'

import ilustration from '../../../../assets/images/icons/illustration-working.svg';

import boostImage from '../../../../assets/images/icons/bg-boost-desktop.svg';

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {

    return (
        <div className="shortly-content">
            <section className="main">


                <Header />


                <div className="main-content">

                    <div className="main-content-info">
                        <div className="container-title">
                            <h1>More than just shorter links</h1>
                        </div>

                        <div className="container-description">
                            <h4>Build your brand's recognition and get detailed insights on how your links are performing.</h4>
                        </div>

                        <div className="container-button">
                            <button className="btn btn-ative">Get Started</button>
                        </div>
                    </div>

                    <div className="main-content-ilustration">
                        <img src={ilustration} alt="" />
                    </div>
                </div>

            </section>

            <section className="section-info">

                {/* Form  */}
                <Shortly />




                <div className="content">
                    <h2>Advanced Statistics</h2>
                    <h5>Track how your links are performing across 
                        the web with or advanced statistics dashboard.</h5>

                    <div className="content-box">
                        <div className="row"></div>
                        <div className="box">
                            {/* <div className="box-icon"><i class="fas fa-chart-line"></i></div> */}
                            <div className="box-icon">
                                <FontAwesomeIcon icon='chart-line' />
                            </div>
                            <div className="box-title"><h3>Brand recognition</h3></div>
                            <div className="box-text"><p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content</p></div>
                        </div>
                        <div className="box">
                            <div className="box-icon"><i className="fas fa-tachometer-alt"></i></div>
                            <div className="box-title"><h3>Detailed Records</h3></div>
                            <div className="box-text"><p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content</p></div>
                        </div>
                        <div className="box">
                            <div className="box-icon"><i className="fas fa-pen"></i></div>
                            <div className="box-title"><h3>Fully customizable</h3></div>
                            <div className="box-text"><p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content</p></div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="section-boost" style={{ backgroundImage: `url(${boostImage})` }}>
                <h2>Boost your links today</h2>
                <button className="btn btn-ative">Get Started</button>
            </section>

            <Footer />
        </div>
    )
}