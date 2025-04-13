import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import BurgerMenu from './BurgerMenu';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [currentPathForBurger, setCurrentPathForBurger] = useState(window.location.pathname.slice(1));
    const navigate = useNavigate();
    const location = useLocation();
    const navLinks = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Projects', link: '/projects' },
        { name: 'Contact', link: '/contact' },
    ];

    const handleLogoClick = () => {
        setOpen(false);
        navigate('/');
        setCurrentPathForBurger(''); // Actualiza el path para el BurgerMenu
    };

    useEffect(() => {
        setCurrentPathForBurger(location.pathname.slice(1));
    }, [location.pathname]);

    return (
        <header className={styles.containerNavbar}>
            <NavLink
                to="/"
                className={`${styles.logo} ${({ isActive }) => isActive ? styles.active : ''}`}
                onClick={handleLogoClick}
            />
            <nav className={!open ? styles.navbar : `${styles.navbar} ${styles.open}`}>
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
            <div className={styles.burgerMenu} onClick={() => setOpen(!open)}>
                <BurgerMenu open={open} setOpen={setOpen} path={currentPathForBurger} />
            </div>
        </header>
    );
};

export default Navbar;