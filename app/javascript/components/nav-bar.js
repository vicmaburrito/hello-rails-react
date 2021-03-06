import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/nav-bar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.flexRight}>
        <li>
          <NavLink
            to='/'
            className={styles.navLink}
            activeclassname={styles.selected}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/api/things'
            className={styles.navLink}
            activeclassname={styles.selected}
          >
            Greet me!
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;