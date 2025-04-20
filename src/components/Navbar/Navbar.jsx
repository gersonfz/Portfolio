import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import BurgerMenu from './BurgerMenu';
import { FaWhatsapp, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navLinks = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Projects', link: '/projects' },
    ];
    const path = location.pathname.slice(1);
    const navbarRef = useRef(null);
    const burgerMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (open && navbarRef.current && !navbarRef.current.contains(event.target) && burgerMenuRef.current && !burgerMenuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        const handleEscPress = (event) => {
            if (open && event.key === 'Escape') {
                setOpen(false);
            }
        };

        window.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('keydown', handleEscPress);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('keydown', handleEscPress);
        };
    }, [open]);

    return (
        <header className={styles.containerNavbar}>
            <NavLink
                to="/"
                className={styles.logo}
            >
            </NavLink>
            <nav
                className={!open ? styles.navbar : `${styles.navbar} ${styles.open}`}
                ref={navbarRef}
            >
                <ul>
                    {navLinks.map(list => (
                        <li key={list.name}>
                            <NavLink
                                to={list.link}
                                className={({ isActive }) => isActive ? styles.active : undefined}
                                onClick={() => setOpen(false)}
                            >
                                {list.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={styles.socialIcons}>
                <a href="https://wa.me/+584241641926" target="_blank" rel="noopener noreferrer" >
                    <FaWhatsapp size={30} />
                </a>
                <a href="https://www.linkedin.com/in/gerson-fernandez-espinoza17" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                </a>
                <a href="https://www.facebook.com/gerson.fernandez.100" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} />
                </a>
                <a href="https://www.instagram.com/gerson_fz/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} />
                </a>
            </div>
            <div className={styles.burgerMenu} ref={burgerMenuRef}>
                <BurgerMenu open={open} setOpen={setOpen} path={path} />
            </div>
        </header>
    );
};

export default Navbar;