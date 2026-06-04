import React from 'react'
import './intro.css';
import bg from '../../assets/mahi.jpg'
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello, I'm</span>

            <span className="introName">
                Maheshwari Raccha
            </span>

            <span className="introRole">
                Software Developer | React Learner | Problem Solver
            </span>

            <p className="introPara">
                I am a Computer Science student passionate about web development,
                software engineering, and creating intuitive digital experiences.
                I enjoy building responsive applications, learning new technologies,
                and solving real-world problems through code.
            </p>
        </div>

        <div className="photo"> <img src={bg} alt="profile" className="bg"/></div>
       
    </section>
  )
}

export default Intro
