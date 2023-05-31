import React from "react";
import Image from "next/image";
import styles from "@css/Hero.module.css";
import appstore from "@images/Hero/appstore.svg";
import star from "@images/Hero/star.svg";
import Ghost, { type } from "@components/Ghost";
import Circle from "./Circle";
import Leaf from "./Leaf";

const Hero = () => {
    return (
        <section className={`${styles.hero} align-center`}>
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
            <div className={`${styles.heroRight} align-center`}>
                <div></div>
            </div>
            <div className={styles.icons}>
                <Leaf
                    position={{
                        top: "-16em",
                        left: "-61em",
                        scale: "3.5",
                    }}
                />
                <Circle
                    size={30}
                    backgroundColor={"#f2c7c8"}
                    position={{ top: "2em", left: "-90vw" }}
                />
                <Circle
                    size={30}
                    backgroundColor={"#f2c7c8"}
                    position={{ top: "-16.2em", left: "-25vw" }}
                />
                <Circle
                    size={35}
                    backgroundColor={"#eb695c"}
                    position={{ top: "16.5em", left: "-50em" }}
                />
                <Circle
                    size={20}
                    backgroundColor={"#f2c7c8"}
                    position={{ top: "-14em", left: "-31em" }}
                />
                <Leaf
                    position={{
                        top: "-12.5em",
                        left: "-34em",
                        rotate: "-20deg",
                    }}
                />
                <Circle
                    size={45}
                    backgroundColor={"#ec685c"}
                    position={{
                        top: "-10.5em",
                        left: "-36em",
                        border: "15px solid #f6d3bd",
                    }}
                />
                <Ghost type={type.surprised} />
                <Ghost type={type.angry} />
                <Ghost type={type.happy} />
            </div>
        </section>
    );
};

export default Hero;
