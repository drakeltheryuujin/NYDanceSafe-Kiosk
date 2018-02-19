import React, { Component } from 'react';
import '../public/stylesheets/boilerplate.css';

class Welcome extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
      <div>
        <section id="hero" className="hero full-height valign-wrapper scrollspy">
            <div id="tunnel" className="tunnel">
                <h1 className="center">{ this.props.welcomeText || '' }</h1>
                <header className="navbar">
                    <nav>
                        <div className="container">
                            <div className="nav-wrapper">
                                <a href="#!" className="brand-logo">React</a>
                                <ul className="hide-on-med-and-down table-of-contents">
                                    <li>
                                        <a href="#hero">Home</a>
                                    </li>
                                    <li>
                                        <a href="#projects">Projects</a>
                                    </li>
                                    <li>
                                        <a href="#services">Services</a>
                                    </li>
                                    <li>
                                        <a href="#prices">Prices</a>
                                    </li>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                    <li>
                                      <a href="#blog">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#contact">Contact</a>
                                    </li>
                                    <li>
                                        <a href="#other">Other</a>
                                    </li>
                                </ul>
                                <ul id="slide-out" className="side-nav">
                                    <li>
                                        <a href="#hero">Home</a>
                                    </li>
                                    <li>
                                        <a href="#projects">Projects</a>
                                    </li>
                                    <li>
                                        <a href="#services">Services</a>
                                    </li>
                                    <li>
                                        <a href="#prices">Prices</a>
                                    </li>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                    <li>
                                        <a href="#blog">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#contact">Contact</a>
                                    </li>
                                    <li>
                                        <a href="#other">Other</a>
                                    </li>
                                </ul>
                                <a href="#" data-activates="slide-out" className="button-collapse valign-wrapper">
                                    <div className="hamburger"></div>
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </section>
      </div>
		);
	}
}

export default Welcome;
