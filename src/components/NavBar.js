import React from "react";
import styles from "@css/NavBar.module.css";
import Image from "next/image";
import icon from "@images/icon.png";

const NavBar = () => {
    return (
        <div className={`${styles.nav} align-center`}>
            <a href="#">
                <Image src={icon} width={50} height={50} alt="icon" />
            </a>
            <span className={`${styles.navLinks} align-center`}>
                <span>Emotions</span>
                <span>Manifesto</span>
                <span>Self-awareness test</span>
                <span>Work with us</span>
            </span>
            <button>Download app</button>
        </div>
    );
};

export default NavBar;
