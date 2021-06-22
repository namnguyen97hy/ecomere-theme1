import React, { useState } from "react";
import {Grid, Box, Container} from "@material-ui/core"
import logoImg from "./../../assets/images/logo.png";
import Menu from "./Menu";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallIcon from '@material-ui/icons/LocalMall'
import ClearIcon from '@material-ui/icons/Clear';
import "./index.scss"

const Header = (props) => {
    const [isShowHambMenu, setShowHambMenu] = useState(false);
    const [isShowSearchModal, setShowSearchModal] = useState(false)
    return (
            <Container maxWidth="xl" style={{position:"relative"}}>
                <Box className="box_header">
                    <Grid container alignItems="center" justify="space-between" spacing={3} className="header">
                        <Grid item md={2} xs={6}>
                            <img src={logoImg} alt="Logo Image" className="logo_img" />
                        </Grid>
                        <Grid item md={6} style={{padding:0}}> 
                            <Menu isShowHambMenu = {isShowHambMenu}/>
                        </Grid>
                        <Grid item md={4} xs={6} style={{padding:0,margin: "1rem 0 0 0"}} className="list_action_btn">
                            <ul className="action_btn">
                                <li className="bar_menu" onClick={() => {setShowHambMenu(!isShowHambMenu)}} >
                                    <MenuIcon className="action_icon"/>
                                </li>
                                <li className="action_btn_item" onClick={() => setShowSearchModal(true)}>
                                    <SearchIcon className="action_icon"/>
                                    <p>Search</p>
                                </li>
                                <li className="action_btn_item">
                                    <AccountCircleIcon className="action_icon"/>
                                    <p>Account</p>
                                </li>
                                <li className="action_btn_item">
                                    <FavoriteBorderIcon className="action_icon"/>
                                    <p>WishList</p>
                                    <span className="quanlity">1</span>
                                </li>
                                <li className="action_btn_item">
                                    <LocalMallIcon className="action_icon"/>
                                    <p>Cart</p>
                                    <span className="quanlity">1</span>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                    <div className={`search ${isShowSearchModal ? "show" : ""}`}>
                        <div className="search_overlay" onClick={() => setShowSearchModal(false)}></div>
                        <div className={`search_container ${isShowSearchModal ? 'showInput' : ''}`}>
                            <input className="input" />
                            <span className="iconSearch"><SearchIcon /></span>
                            <span className="iconCancel" onClick={() => setShowSearchModal(false)}><ClearIcon /></span>
                        </div>
                    </div>
                </Box>
            </Container>
    )
}
export default Header