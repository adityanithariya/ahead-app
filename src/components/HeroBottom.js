import React from "react";
import styles from "@css/HeroBottom.module.css";

const HeroBottom = () => {
    return (
        <div className={`${styles.section} align-center`}>
            <div>EQ Beats IQ</div>
            <div>
                People with high emotional intelligence (EQ) live more fulfilled
                lives. They tend to be happier and have healthier relationships.
            </div>
            <div>
                They are more successful in their pursuits and make for
                inspiring leaders. According to science, they earn $29k a year
            </div>
        </div>
    );
};

export default HeroBottom;
