import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import BurgerMenu from './BurgerMenu'
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navLinks = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Projects', link: '/projects' },
        { name: 'Contact', link: '/contact' },
    ]

    const path = window.location.pathname;
    return (
        <header className={styles.containerNavbar}>
            <span className={styles.logo} />
            <nav className={!open ? styles.navbar : `${styles.navbar} ${styles.open}`}>
                <ul>
                    {
                        navLinks.map(list => (
                            <li key={list.name}>
                                <NavLink to={list.link} onClick={() => setOpen(!open)} > 
                                    {list.name} 
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <div className={styles.burgerMenu} onClick={() => setOpen(!open)}>
                <BurgerMenu open={open} setOpen={setOpen} path={path.slice(1)}/>
            </div>
        </header>
    )
}

export default Navbar