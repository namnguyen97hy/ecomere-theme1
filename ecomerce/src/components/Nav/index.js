import React from "react";
import "./index.scss"
import { useHistory } from "react-router";
import { Box } from "@material-ui/core";

const Nav = (props) => {
    const history = useHistory();
    const {namePage, pageDetail} = props;
    return(
        <div className="nav">
            <Box className="box_container--page">
                <span className="home" onClick={() => history.push("/page/home")}>Home</span>
                <span className="nav_line" id={pageDetail ? "normal" : ""}>|</span>
                <span 
                    className="name_page" 
                    id={pageDetail ? "normal" : ""}
                    onClick={() => {
                        pageDetail && history.push("/page/blog/news")}}
                >
                    {namePage}
                </span>
                {pageDetail ? 
                    <>
                        <span className="nav_line">|</span>
                        <span className="name_page">{pageDetail}</span>
                    </> : ""
                }
            </Box>
        </div>
    )
}
export default Nav