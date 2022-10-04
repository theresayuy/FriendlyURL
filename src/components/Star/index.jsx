import React from "react";

import { getWindowDim } from "../../utils";
import STAR_IMG from "../../assets/img/bg-star.png";

import "./style.css";

function Star(props) {
    return (
        <img
            className="Star"
            src={STAR_IMG}
            width={`${getWindowDim().winW * 0.02343}px`}
            height={`${getWindowDim().winW * 0.02343}px`}
            style={{
                top: props.y,
                left: props.x
            }}
        >
        </img>
    )
}

export default Star