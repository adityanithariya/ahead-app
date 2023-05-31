import React from "react";

const Leaf = ({ position }) => {
    return (
        <div
            style={{
                width: "49px",
                height: "30px",
                overflow: "hidden",
                position: "relative",
                ...position
            }}
        >
            <div
                style={{
                    backgroundColor: "rgb(119, 197, 153)",
                    width: "106px",
                    height: "200px",
                    borderRadius: "50%",
                    position: "relative",
                    left: "-31px",
                    top: "20px",
                }}
            ></div>
        </div>
    );
};

export default Leaf;

