import React from 'react';
import BackToTop from "./BackToTop";
import Helmet from "./Helmet";  //left off here
import TextLoop from "react-text-loop";
import HeaderThree from './HeaderThree'; //got
import FooterTwo from "./FooterTwo"; //got
import TabTwo from "./TabTwo"; //got
import ContactThree from "./ContactThree"; //got
import PortfolioList from "./PortfolioList"; // got

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my World',
        description: "",
        buttonText: '',
        buttonLink: ''
    }
]
const PortfolioLanding = () => {
    let title = 'About Me',
        description = "As a recent graduate from the DevMountain Full Stack Web Developer program, I'm looking forward to channeling my creative energy and apply my full-stack skill set towards web design and problem solving.  With a background in sales, my drive and determination have helped me consistently earn top recognition in every position I've held.  I'm planning on utilizing the same drive and determination towards web development.";
    return (
        <div className="active-dark">
            <Helmet pageTitle="Portfolio Landing" />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image headshot-logan.jpg" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">Hi, I’m Logan.<br/>
                                            <TextLoop>
                                                <span>React.js</span>
                                                <span>JavaScript</span>
                                                <span>Node.js</span>
                                                <span>HTML & CSS</span>
                                                <span>PostgreSQL</span>
                                                <span>SQL Server</span>
                                                <span>C#</span>
                                            </TextLoop>{" "}
                                            </h1>
                                            <h2>Full Stack Web Developer</h2>
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/bg/headshot-logan.jpg" alt="Picture of Logan Banning"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}

            {/* Start Portfolio Area */}
            <div id="portfolio" className="fix">
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                        <h2 className="title">My Latest Projects</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}
            
            {/* Start COntact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--1">
                    <ContactThree contactImages="/assets/images/bg/Logan-picture-bell-canyon.jpg" contactTitle="Hire Me." />
                </div>
            </div>
            {/* End COntact Area */}

            <FooterTwo />
            {/* Start Back To Top */}
            <div className="backto-top">
                <BackToTop showUnder={160} />
            </div>
            {/* End Back To Top */}
            
        </div>
    )
}

export default PortfolioLanding;
