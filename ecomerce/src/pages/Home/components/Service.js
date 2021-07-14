import { Grid } from "@material-ui/core";
import React from "react";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RefreshIcon from '@material-ui/icons/Refresh';
import ServiceImg from "./../../../assets/images/service_img.jpg";

const Service = (props) => {
    return (
        <div className="service">
            <h3>Exquiste Services</h3>
            <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                    <div className="service_item">
                        <span className="icon"><ThumbUpIcon /></span>
                        <span>
                            <p className="name">Quality Support</p>
                            <p className="desc">Always Online 24/7</p>
                        </span>
                    </div>
                    <div className="service_item">
                        <span className="icon"><LocalShippingIcon /></span>
                        <span>
                            <p className="name">Free Delivery</p>
                            <p className="desc">Order From All Items</p>
                        </span>
                    </div>
                </Grid>
                <Grid item md={4} xs={12}>
                    <img src={ServiceImg} alt="service_img" className="service_img" />
                </Grid>
                <Grid item md={4} xs={12}>
                    <div className="service_item">
                        <span className="icon"><MailOutlineIcon /></span>
                        <span>
                            <p className="name">Join NewLetters</p>
                            <p className="desc">20% Off By Subscribing</p>
                        </span>
                    </div>
                    <div className="service_item">
                        <span className="icon"><RefreshIcon /></span>
                        <span>
                            <p className="name">Return & Refund</p>
                            <p className="desc">Money Back Guarantee</p>
                        </span>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default Service;