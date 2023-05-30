import React from "react";
import styles from "@css/Ghost.module.css";
import Image from "next/image";
import smile from "@images/Ghost/smile.svg";

const Ghost = () => {
    return (
        <div className={`${styles.ghostBox} align-center`}>
            <div className={`${styles.ghost} align-center`}>
                <Image src={smile} width={20} height={20} alt="smile" />
            </div>
            <div className="align-center">
                <div className={styles.bottom}></div>
                <div className={styles.bottom}></div>
                <div className={styles.bottom}></div>
            </div>
        </div>
    );
};

export default Ghost;
