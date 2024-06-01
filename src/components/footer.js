import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <a name="footer" />
                <div className="buttonUp">
                    <a href="#header"><AiOutlineArrowUp id="img"/></a>
                </div>

                <span>@Powered by Daniel Mihai</span>

                <div className="container">
                     <div className="container-right">
                        <h2>Find me:</h2>

                        <a href="https://www.linkedin.com/in/даниел-михай-4b72142b9/" target="_blank"><FaLinkedin className="block"/></a>
                        <a href="https://github.com/messsimo" target="_blank"><SiGithub className="block"/></a>
                        <a href="https://t.me/messssimo" target="_blank"><FaTelegram className="block"/></a>
                    </div>

                    <div className="container-left">
                        <h2>Write me:</h2>
                        <p>danikmihai23@mail.ru</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer