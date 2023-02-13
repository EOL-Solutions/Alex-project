import React from "react";
import styles from "./Navbar.module.css";
import Foto from "./../Hero/foto.png"

const Navbar = ({ hamActive, setHamActive }) => {
  const handleClick = () => {
    setHamActive(!hamActive);
  };

  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarInner} center`}>
        <button
          className={`${styles.hamburger} ${hamActive && styles.active}`}
          onClick={handleClick}
        >
          <span className={styles.hamburgerLines}></span>
        </button>
        <div className={`${styles.navLeft}`}>
          <img src={Foto} alt="logo" className={styles.brand} />
        </div>
        <div className={`${styles.navRight} center`}>
          <div className={styles.navLinksWrapper}>
            <div className={styles.verticalLine}> </div>
            <a href="/" className={`${styles.nav} center`}>
              Home 
            </a>
            <a href="/" className={`${styles.nav} center`}>
              Projects
            </a>
            <a href="/" className={`${styles.nav} center`}>
              Help
            </a>
            <a href="/" className={`${styles.nav} center`}>
              About
            </a>
          </div>
          <div>
            <a href="/" className={styles.login}>
              Log in
            </a>
            <button className={styles.signup}>Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;