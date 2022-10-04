import React from "react";

import { getWindowDim } from "../../utils";
import Star from "../Star";

import './style.css';

function Background() {
    const WIN_DIM = getWindowDim();
    const STAR_PROPS = [];
    
    for (let i = 0; i < 69; i++) {
        STAR_PROPS.push({
            x: (WIN_DIM.winW - 50) * Math.random(),
            y: (WIN_DIM.winH - 50) * Math.random(),
            key: i
        })
    }

    return (
        <div class="Background">
            {
                STAR_PROPS.map(prop => (
                    <Star
                        key={prop.key} 
                        x={prop.x}
                        y={prop.y}
                    />
                ))
            }
        </div>
    );
}

export default Background;