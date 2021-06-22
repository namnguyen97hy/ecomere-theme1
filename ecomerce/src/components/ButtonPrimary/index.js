import React from "react";
import "./index.scss"

const ButtonPrimary = (props) => {
    const {content} = props;
    return (
        <button className="primary_btn">
            {content}
        </button>
    )
}
export default ButtonPrimary;