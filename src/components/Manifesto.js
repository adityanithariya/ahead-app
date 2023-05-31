import React from "react";
import styles from "@css/Manifesto.module.css";
import Ghost, { type } from "@components/Ghost";
import Badge from "@components/Badge";
import Circle from "@components/Circle";
import Leaf from "./Leaf";

const Manifesto = () => {
    return (
        <section className={`${styles.section} align-center`}>
            <div className={`${styles.left} align-center`}>
                <div>Build out of frustration</div>
                <div>Meet the ahead app</div>
                <div className="align-center">
                    <Badge />
                    <div className={`${styles.ghostBox} align-center`}>
                        <Ghost type={type.smile} />
                    </div>
                    <Circle
                        size={200}
                        backgroundColor={"#ff45001c"}
                        position={{ top: "18em", left: "-3.5em" }}
                    />
                    <Circle
                        size={20}
                        backgroundColor={"#f2c7c8"}
                        position={{ top: "19em", left: "24em" }}
                    />
                    <Leaf position={{
                        top: "-3.5em",
                        left: "11em",
                        rotate: "-20deg"
                    }} />
                </div>
            </div>
            <div className={`${styles.right} align-center`}>
                <div></div>
                <div className={`${styles.content} align-center`}>
                    <div>
                        A personalized pocket coach that provodes bite-sized,
                        science-driven tools to boost emotional intelligence.
                    </div>
                    <div>
                        Think of it as a pocket cheerleader towards a better,
                        more fulfilling.
                    </div>
                </div>
            </div>
            <div></div>
        </section>
    );
};

export default Manifesto;

