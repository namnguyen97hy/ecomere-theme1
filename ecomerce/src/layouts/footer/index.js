import React, { useState } from "react";
import "./index.scss"
import { Container, Box, Grid } from "@material-ui/core";
import ImageLogo from "../../assets/images/logo.png";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Footer = (props) => {
    const [isShowExtend, setShowExtend] = useState();
    const [isShow, setShow] = useState(false)
    return (
        <div className="footer">
            <Container maxWidth="xl">
                <Box className="box_container">
                    <Grid container spacing={2}>
                        <Grid item md={3} xs={12}>
                            <img src={ImageLogo} alt="logo" />
                            <p className="desc">Tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
                            <ul className="list_icons">
                                <li><FacebookIcon /></li>
                                <li><TwitterIcon /></li>
                                <li><InstagramIcon /></li>
                                <li><PinterestIcon /></li>
                                <li><YouTubeIcon /></li>
                            </ul>
                        </Grid>
                        <Grid item md={2} sm={4} xs={12}>
                            <p className="footer_title hidden">SERVICES</p>
                            <div className="list_footer" onClick={() => {
                                setShowExtend("service")
                                setShow(!isShow)
                                }}>
                                <p className="footer_title">SERVICES</p>
                                <span><ExpandMoreIcon /></span>
                            </div>
                            <ul className="list_footer_item" id={isShowExtend === "service"  && isShow ? "show" : ""}>
                                <li>About Vegist</li>
                                <li>Faq's</li>
                                <li>Contact Us</li>
                                <li>News</li>
                                <li>SiteMap</li>
                            </ul>
                        </Grid>
                        <Grid item md={2} sm={4} xs={12}>
                            <p className="footer_title hidden">PRIVACY & TERMS</p>
                            <div className="list_footer" onClick={() => {
                                setShowExtend("terms")
                                setShow(!isShow)
                                }}>
                                <p className="footer_title">PRIVACY & TERMS</p>
                                <span><ExpandMoreIcon /></span>
                            </div>
                            <ul className="list_footer_item" id={isShowExtend === "terms" && isShow ? "show" : ""}>
                                <li>Payment Policy</li>
                                <li>Privacy Policy</li>
                                <li>Return Policy</li>
                                <li>Shipping Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </Grid>
                        <Grid item md={2} sm={4} xs={12}>
                            <p className="footer_title hidden">MY ACCOUNT</p>
                            <div className="list_footer" onClick={() => {
                                setShowExtend("account")
                                setShow(!isShow)
                                }}>
                                <p className="footer_title">MY ACCOUNT</p>
                                <span><ExpandMoreIcon /></span>
                            </div>
                            <ul className="list_footer_item" id={isShowExtend === "account" && isShow ? "show" : ""}>
                                <li>My Account</li>
                                <li>My Cart</li>
                                <li>Order History</li>
                                <li>My WishlistNews</li>
                                <li>My Bill</li>
                            </ul>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <p className="footer_title">CONTACT VEGIST</p>
                            <ul className="list_footer_item" style={{display:"block"}}>
                                <li className="contact">
                                    <span className="icon"><RoomIcon /></span>
                                    <span>Wooster Parck Chowk Bazzar ,New York</span>
                                </li>
                                <li className="contact">
                                    <span className="icon"><PhoneIcon /></span>
                                    <span>
                                        <p >+014-33333-8888-6868</p>
                                        <p>support@spacingtech.com</p>
                                    </span>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}
export default Footer