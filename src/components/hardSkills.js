import React from "react";

class HardSkills extends React.Component {
    render() {
        return (
            <div className="hardskills">
                <a name="hardskills" />
                <h1>Hard Skills</h1>
                <div className="border"></div>
                
                <div className="container">
                     <div className="block">
                        <h2>Frontend development:</h2>

                        <p>88%</p>
                        <h3>HTML5</h3>
                        <progress max="100" value="88"></progress>

                        <p>82%</p>
                        <h3>CSS3</h3>
                        <progress max="100" value="82"></progress>

                        <p>74%</p>
                        <h3>JavaScript</h3>
                        <progress max="100" value="74"></progress>

                        <p>74%</p>
                        <h3>ReactJS</h3>
                        <progress max="100" value="74"></progress>

                        <p>67%</p>
                        <h3>jQuery</h3>
                        <progress max="100" value="67"></progress>
                    </div>

                    <div className="block">
                        <h2>Backend development:</h2>

                        <p>0%</p>
                        <h3>PHP</h3>
                        <progress max="100" value="0"></progress>

                        <p>0%</p>
                        <h3>MySQL</h3>
                        <progress max="100" value="0"></progress>

                        <p>0%</p>
                        <h3>NodeJS</h3>
                        <progress max="100" value="0"></progress>

                    </div>

                    <div className="block">
                        <h2>Other knowledge:</h2>

                        <p>61%</p>
                        <h3>Python</h3>
                        <progress max="100" value="61"></progress>

                        <p>84%</p>
                        <h3>GitHub</h3>
                        <progress max="100" value="84"></progress>
                    </div>
                </div>

            </div>
        )
    }
}

export default HardSkills