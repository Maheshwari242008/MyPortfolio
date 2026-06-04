    import React from 'react';
    import './navbar.css';
    import logo from '../../assets/logo.png';
    import contactImg from '../../assets/contact.png';
    import {Link} from 'react-scroll';
    const Navbar = () => 
    {
        return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="deskTopMenu">
                <Link   className=' desktopMenuListiItem'>Home </Link>
                <Link className=' desktopMenuListiItem'>About</Link>
                <Link className=' desktopMenuListiItem'>Skills</Link>
                <Link className=' desktopMenuListiItem'>Projects</Link> 
            </div>

            <button className="deskTopMenuBtn">
                <img src={contactImg} alt="" className="deskTopMenuImg"/>Contact Me </button>
        </nav>
        )
    }
    export default Navbar
