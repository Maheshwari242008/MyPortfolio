import React from 'react'
import './project.css'

const Project = () => {
  return (
    <section className="main">
        <div className="project">
            
            <h1>My Projects</h1>
            
            <span>Some of my recent Projects</span>
            
            <div className="box">
                <div className="proj">
                     <span><b>Smart Canteen Billing System</b></span>

                    <p>
                        Developed a desktop-based canteen management application using
                        Java and Advanced Java. The system automates billing, manages
                        menu items, generates invoices, and improves order processing
                        efficiency.
                    </p>

                    <a href="https://github.com/Maheshwari242008/Smart-Canteen-Billing-System.git" target="_blank" rel="noreferrer">
                        View on GitHub
                    </a>
                </div>

                <div className="proj">
                    <span><b>Currency Converter</b></span>

                    <p>
                        Built a console-based currency conversion application using C.
                        The program performs real-time currency calculations between
                        different currencies using predefined exchange rates.
                    </p>

                    <a href="https://github.com/Maheshwari242008/Currency-Converter.git" target="_blank" rel="noreferrer">
                        View on GitHub
                    </a>
                </div>

                <div className="proj">
                    <span><b>Movie Streaming UI</b></span>

                    <p>
                        Designed a modern movie streaming platform interface using
                        Figma. Created responsive layouts, user-friendly navigation,
                        movie browsing screens, and visually appealing UI components.
                    </p>

                    <a href="YOUR_FIGMA_LINK" target="_blank" rel="noreferrer">
                        View Design
                    </a>
                </div>

                <div className="proj">
                    <span><b>Burger Kiosk</b></span>

                    <p>
                        Designed an interactive self-service burger ordering kiosk
                        interface using Figma. Focused on user experience, menu
                        navigation, order customization, and a seamless checkout flow.
                    </p>

                    <a href="YOUR_FIGMA_LINK" target="_blank" rel="noreferrer">
                        View Design
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project
