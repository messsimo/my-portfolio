import React, { useState } from "react";
import AboutMeme from "/Users/danielmihai/Documents/code/my-portfolio/src/images/aboutMeme.png";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";


function AboutMe(props) {
    const [isVisible, setIsVisible] = useState(true)

    const click = () => {
        setIsVisible(!isVisible);
    }

        return (
            <div className="aboutMe">
                <a name="aboutme" />
                <h1>About Me</h1>
                <div className="border"></div>

            {!isVisible && 
            <SlArrowLeft className="button-back" onClick={click}/>}

            {isVisible &&    
            <div className="container">
                <span>
                    Hello! I'm <b>Mihai Daniel</b>, and I'm the one who brings fresh ideas and an inexhaustible passion for creating something new to the world of programming!
                    <br /><br />
                     My journey started with <b>Python development</b>, but I soon realized that the IT world is so diverse and exciting that I wanted to try something else. Switching to the <b>Fullstack development</b> path opened up a whole new level of possibilities for me. And now I'm doing <b>Frontend development</b>, but this is just the beginning. I don’t stop there and continue to explore the world of <b>Backend development</b>, striving for maximum coverage of knowledge and skills.
                </span>
            </div>}
            
            {isVisible && 
            <SlArrowRight className="button-next" onClick={click}/>}
            
            <img src={AboutMeme} />

            {!isVisible && 
                <div className="container cont-2">
                    <span>
                        My goal as a programmer is not just to follow a path, but to <b>create new paths.</b> I strive for innovation in web development, looking for new approaches, fresh ideas and <b>non-standard solutions.</b> I am interested not only in what already exists, but also in what has not yet been realized.
                       <br /><br />
                       If you are looking for someone who is not afraid to challenge standards and lead the way, then you have found me. I am ready <b>to take on any challenges</b> and bring the most daring ideas to life. <b>Let's create the future of web development together!</b> 
                  </span>
              </div>}

            </div>
        )
    }


export default AboutMe