import React from "react";
import "./index.scss"

const ButtonSecondary = (props) => {
    const {content,fullWidth, handleOnClick} = props;
    return (
        <button className={`secondary_btn ${fullWidth ? "full_width" : ""}`} onClick={handleOnClick}>
            {content}
        </button>
    )
}
export default ButtonSecondary;