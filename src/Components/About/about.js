import React from 'react'
import './about.css'
import im1 from '../../assets/picc.jpg';

const About = () => {
  return (
    <section id="main">
        <div className="about">
            <h1 className="first">About Me</h1>
          
            <span className='second'>I am passionate about building,learning and solving real world problems</span>
            
            <p className='third'>
                I'm Maheshwari Raccha, a Computer Science student with a strong
                interest in software development and web technologies. I enjoy
                building responsive and user-friendly applications that solve
                real-world problems.
                </p>

                <p className='fourth'>
                My journey in programming started with C and Java, and I am
                currently expanding my skills in JavaScript, React, and modern
                web development. I enjoy learning new technologies, working on
                personal projects, and continuously improving my problem-solving
                abilities.
                </p>

                <p className='fifth'>
                I am passionate about creating efficient software solutions and
                aspire to grow as a full-stack developer. Through hands-on projects and
                continuous learning, I aim to build applications that make a meaningful
                impact while strengthening my technical expertise.
            </p>

        </div>

        <img src={im1} alt="Maheshwari Raccha" className="aboutImg" />
    </section>
    
  )
}

export default About
