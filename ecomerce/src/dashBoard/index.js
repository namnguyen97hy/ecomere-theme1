import { Grid } from "@material-ui/core";
import React from "react";
import "./index.scss";
import logo from "../assets/images/logo.png";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

const DashBoard = (props) => {
    return (
        <div className="dashboard">
            <Grid container spacing={3}>
                <Grid item lg={3}>
                    <div className="header">
                        <img src={logo} alt="logo" />
                        <span><MenuOpenIcon /></span>
                    </div>
                </Grid>
                <Grid item lg={9}>
                    
                </Grid>
            </Grid>
        </div>
    )
}
export default DashBoard