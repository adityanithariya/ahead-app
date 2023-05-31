import React from "react";
import Image from "next/image";
import styles from "@css/Hero.module.css";
import appstore from "@images/Hero/appstore.svg";
import star from "@images/Hero/star.svg";
import Ghost, { type } from "@components/Ghost";

const Hero = () => {
    return (
        <div className={`${styles.hero} align-center`}>
            <div className={`${styles.heroLeft} align-center`}>
                <div>Ahead app</div>
                <div>Master your life by mastering emotions</div>
                <div className={`${styles.appstore} align-center`}>
                    <Image
                        src={appstore}
                        width={120}
                        height={50}
                        alt="appstore"
                    />
                    <div className="align-center">
                        <div className={styles.stars}>
                            {[...Array(5).keys()].map((e) => (
                                <Image
                                    src={star}
                                    width={20}
                                    height={20}
                                    alt="star"
                                    key={e}
                                />
                            ))}
                        </div>
                        <div>100+ Appstore reviews</div>
                    </div>
                </div>
            </div>
            <div></div>
            <div>
                <Ghost type={type.surprised} />
            </div>
        </div>
    );
};

export default Hero;
