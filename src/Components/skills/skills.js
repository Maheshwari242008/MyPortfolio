import React from 'react'
import lan from '../../assets/lang.jpg'
import frontt from '../../assets/front.jpg'
import tool from '../../assets/tools.jpg'
import db from '../../assets/database.jpg'
import con from '../../assets/concept.jpg'
import './skills.css'

const Skills = () => {
  return (
    <section id="main">
        <div className="skill">
            <span className="heading">My Skills</span>
            <span className="sub-heading">Tools and technologies I work with</span>

            <div className="box">
                <div className="lang skillCard" id="same">
                    <img src={lan} alt="Languages" id="image" />
                    <span>Languages</span>
                        <ul>
                            <li>C</li>
                            <li>C++</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>JavaScript</li>
                        </ul>
                </div>

                <div className="frontend skillCard" id="same">
                    <img src={frontt} alt="frontend" id="image" />
                    <span>Frontend</span>
                    <ul>
                       <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>

                <div className="tools skillCard" id="same">
                    <img src={tool} alt="tools" id="image" />
                    <span>Tools and technologies</span>
                     <ul>
                        <li>Git & GitHub</li>
                        <li>Figma</li>
                        <li>MYSQL workbench</li>
                    </ul>
                </div>

                <div className="database skillCard" id="same">
                    <img src={db} alt="dataabase" id="image" />
                    <span>VS Code</span>   
                        <ul>
                            <li>SQL</li>
                            <li>JDBC Concepts</li>
                            <li>MySQL</li>
                        </ul>
                </div>

                <div className="concepts skillCard" id="same">
                    <img src={con} alt="concept" id="image" />
                    <span>Concepts</span>
                    <ul>
                        <li>OOP</li>
                        <li>Exception handling</li>
                        <li>Problem-Solving</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
