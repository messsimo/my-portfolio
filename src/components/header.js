import React from 'react';
import ReactDOM from 'react-dom';
import headerMe from "/Users/danielmihai/Documents/code/my-portfolio/src/images/headerMe.png";
import backpack from "/Users/danielmihai/Documents/code/my-portfolio/src/images/backpack.png";
import { FaReact } from "react-icons/fa";
import html from "/Users/danielmihai/Documents/code/my-portfolio/src/images/html.png";
import css from "/Users/danielmihai/Documents/code/my-portfolio/src/images/css.png";
import { IoLogoJavascript } from "react-icons/io5";
import { DiPhp } from "react-icons/di";
import hand from "/Users/danielmihai/Documents/code/my-portfolio/src/images/hand.png";
import decoration from "/Users/danielmihai/Documents/code/my-portfolio/src/images/decoration.png";

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className='header-background'></div>
                <a name="header"/>
                <div className='header-navbar'>
                    <form>
                        <a href="#aboutme">About me</a>
                        <a href="#hardskills">Hard Skills</a>
                        <a href="#projects">Projects</a>
                    </form>

                    <h2>DanielDev</h2>
                </div>
                <div className='header-me'>
                    <img src={headerMe} alt="Daniel's portrait" className='logo-me' />

                    <FaReact className='react-logo' />
                    <img src={html} className='html-logo' />
                    <img src={css} className='css-logo' />
                    <IoLogoJavascript className='javaScript-logo' />
                    <DiPhp className='php-logo' />
                </div>

                <div className='header-text'>
                    <img src={hand} alt="Hand waving" />
                    <h4>Hello</h4>
                    <h2>I'm Daniel Mihai</h2>
                    <h3>Frontend developer.</h3>
                    <span>I don't do better than others, I do differently</span>
                </div>

                <div className='header-button'>
                    <img src={backpack} alt="Backpack" />
                    <a href='#footer'><button type='button'>Сontact with me</button></a>
                </div>

                <img src={decoration} className='decoration' />
            </header>
        )
    }
}

export default Header;
