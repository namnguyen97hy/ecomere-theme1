import React, { useEffect, useState } from "react";
import {Grid, Box, Container, Divider} from "@material-ui/core"
import logoImg from "./../../assets/images/logo.png";
import Menu from "./Menu";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import LocalMallIcon from '@material-ui/icons/LocalMall'
import ClearIcon from '@material-ui/icons/Clear';
import cartItemSmall1 from "../../assets/images/cart_small-item1.jpg";
import ButtonSecondary from "../../components/ButtonSecondary"
import "./index.scss"
import { useHistory } from "react-router-dom";

const Header = (props) => {
    const history = useHistory()
    const [isShowHambMenu, setShowHambMenu] = useState(false);
    const [isShowSearchModal, setShowSearchModal] = useState(false);
    const [isShowCartModal, setShowCartModal]= useState(false)
    const [scrolling, setScrolling] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY === 0 && scrolling === true) {
                setScrolling(false)
            }
            else if (window.scrollY !== 0 && scrolling === false) {
                setScrolling(true);
            }
        })
    },[window.scrollY])
    const menuId = scrolling ? "header_menu" : ""
    return (
        <Container maxWidth="xl" style={{position:"relative"}} id={menuId} >
            <Box className="box_container">
                <Grid container alignItems="center" justify="space-between" spacing={3} className="header">
                    <Grid item md={2} xs={6}>
                        <img src={logoImg} alt="Logo Image" className="logo_img" />
                    </Grid>
                    <Grid item md={6} style={{padding:0}}> 
                        <Menu 
                            isShowHambMenu = {isShowHambMenu}
                            hiddenHambMenu = {() => setShowHambMenu(false)}
                        />
                    </Grid>
                    <Grid item md={4} xs={6} style={{padding:0,margin: "1rem 0 0 0"}} className="list_action_btn">
                        <ul className="action_btn">
                            <li className="bar_menu" onClick={() => {setShowHambMenu(true)}} >
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
                            <li className="action_btn_item" onClick={() => setShowCartModal(true)}>
                                <LocalMallIcon className="action_icon"/>
                                <p>Cart</p>
                                <span className="quanlity">1</span>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
                <div className={`search ${isShowSearchModal ? "show" : ""}`}>
                    <div className="overlay" onClick={() => setShowSearchModal(false)}></div>
                    <div className={`search_container ${isShowSearchModal ? 'showInput' : ''}`}>
                        <input className="input" />
                        <span className="iconSearch"><SearchIcon /></span>
                        <span className="iconCancel" onClick={() => setShowSearchModal(false)}><ClearIcon /></span>
                    </div>
                </div>
                <div className={`cart ${isShowCartModal ? "show" : ""}`}>
                    <div className="overlay" onClick={() => setShowCartModal(false)}></div>
                    <div className={`cart_container ${isShowCartModal ? 'showCartContainer' : ''}`} >
                        <div className="cart_relative">
                            <span id="cart_icon" onClick={() => setShowCartModal(false)}><ClearIcon /></span>
                            <p>Thera are <span id="number_product">3</span> product </p>
                            <Box marginY={2}><Divider /></Box>
                            <div className="product_item">
                                <img src={cartItemSmall1} alt="item_image" />
                                <div className="product_info">
                                    <p id="name">Fresh Dryed Amod (50g)</p>
                                    <div className="fee">
                                        <p>3 x <span>$31.00 USD</span></p>
                                        <span id="cart_icon"><DeleteOutlineIcon /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="sub_total">
                                <Box marginY={2}><Divider /></Box>
                                <div className="total">
                                    <span>Sub Total: </span>
                                    <span className="money">$93.00 USD</span>
                                </div>
                                <Box marginTop={2} marginBottom={4}><Divider /></Box>
                                <ButtonSecondary 
                                    content="View Cart" 
                                    fullWidth={true}
                                    handleOnClick={() => {
                                        history.push("/page/cart");
                                        setTimeout(() => {
                                            setShowCartModal(false)
                                        },500)
                                    }}  
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Container>
    )
}
export default Header