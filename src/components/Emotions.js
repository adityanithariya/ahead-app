import React from "react";
import Image from "next/image";
import angry from "@images/Emotions/angry-face.png";
import styles from "@css/Emotions.module.css";

const Emotions = () => {
    const arr = [
        {
            icon: angry,
            title: "You argue with a colleague",
            desc: "You get angry and defensive, instead of staying open and working towards common ground.",
        },
    ];
    return (
        <section className={styles.section}>
            <h2>Does this sound familiar...</h2>
            <div>
                {arr.map((e) => (
                    <div className={`${styles.card} align-center`}>
                        <Image src={e.icon} width={40} height={40} alt="emoji" />
                        <div>{e.title}</div>
                        <div>{e.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Emotions;
