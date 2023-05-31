import React from "react";
import styles from "@css/HeroBottom.module.css";

const HeroBottom = () => {
    return (
        <div className={`${styles.section} align-center`}>
            <div>Be the best you with EQ</div>
            <div>
                Not having your own emotions under control might be holding you
                back.
            </div>
            <div>
                Additionally, not understanding those of others stops you from
                being parent, friend you can be.
            </div>
        </div>
    );
};

export default HeroBottom;

