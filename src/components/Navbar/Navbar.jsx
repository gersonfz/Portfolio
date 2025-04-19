import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import BurgerMenu from './BurgerMenu';
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navLinks = [
        { name: 'Inicio', link: '/' },
        { name: 'Acerca de', link: '/about' },
        { name: 'Proyectos', link: '/projects' },
        { name: 'Contacto', link: '/contact' },
    ];
    const path = location.pathname.slice(1);


    return (
        <header className={styles.containerNavbar}>
            <NavLink
                to="/"
                className={styles.logo}
                onClick={() => setOpen(false)} // Cierra el menú al hacer clic en el logo (si está abierto)
            >
            </NavLink>
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
                <BurgerMenu open={open} setOpen={setOpen} path={path} />
            </div>
        </header>
    );
};

export default Navbar;