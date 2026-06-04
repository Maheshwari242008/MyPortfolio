import React from 'react'
import lan from '../../assets/lang.jpg'
import frontt from '../../assets/front.jpg'
import tool from '../../assets/tools.jpg'
import db from '../../assets/database.jpg'
import con from '../../assets/concept.jpg'

const Skills = () => {
  return (
    <section id="main">
        <div className="skill">
            <span className="one">My Skills</span>
            <span className="two">Tools and technologies I work with</span>

            <div className="box">
                <div className="lang">
                    <img src={lan} alt="Languages" id="image" />
                    <span>Languages</span>
                </div>

                <div className="frontend">
                    <img src={frontt} alt="frontend" id="image" />
                    <span>Frontend</span>
                    <ul>
                        <li>C</li>
                        <li>C++</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                    </ul>
                </div>

                <div className="tools">
                    <img src={tool} alt="tools" id="image" />
                    <span>Tools and technologies</span>
                     <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>

                <div className="database">
                    <img src={db} alt="dataabase" id="image" />
                    <span>VS Code</span>   
                    <li>Git & GitHub</li>
                    <li>Figma</li>
                    <li>MYSQL workbench</li>
                </div>

                <div className="concepts">
                    <img src={con} alt="concept" id="image" />
                    <span>Concepts</span>
                    <li>OOP</li>
                    <li>Exception handling</li>
                    <li>Problem-Solving</li>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
