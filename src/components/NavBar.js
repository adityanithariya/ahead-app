"use client";

import React, { useEffect } from "react";
import styles from "@css/NavBar.module.css";
import Image from "next/image";
import icon from "@images/icon.png";

const NavBar = () => {
    useEffect(() => {
        const handler = () => {
            let nav = document.querySelector(`.${styles.nav}`);

            if (document.documentElement.scrollTop === 0)
                nav.classList.remove(styles.scrolled);
            else nav.classList.add(styles.scrolled);
        };
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);
    return (
        <nav className={`${styles.nav} align-center`}>
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
        </nav>
    );
};

export default NavBar;
