import React from "react";
import "./index.scss"
import Nav from "../../components/Nav";
import {Box, Grid, Divider} from "@material-ui/core";
import CartMediumImg1 from "../../assets/images/cart_medium_img1.jpg";
import CartItem from "./CartItem";

const listItemProduct = [
    {
        id:0,
        img: CartMediumImg1,
        name: "Fresh Papaya",
        material: "Canada",
        size: 1,
        price:15
    },
    {
        id:1,
        img: CartMediumImg1,
        name: "Apple",
        material: "France",
        size: 2,
        price:12
    },
    {
        id:2,
        img: CartMediumImg1,
        name: "Vegetable Fresh",
        material: "China",
        size: 3,
        price:8
    },
    {
        id:3,
        img: CartMediumImg1,
        name: "Fresh Oranges",
        material: "Indonesia",
        size: 1,
        price:9
    },
    {
        id:4,
        img: CartMediumImg1,
        name: "Coconuts",
        material: "Singapore",
        size: 5,
        price:12
    },
    {
        id:5,
        img: CartMediumImg1,
        name: "Fresh Pepper",
        material: "USA",
        size: 1,
        price:14
    },
]

const Cart = (props) => {
    return (
        <div className="cart_product">
            <Nav namePage="Your Shopping Cart" />
            <Box className="box_container--page">
                <Grid container spacing={3}>
                    <Grid item md={9}>
                        <Box marginY={1}><Divider /></Box>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <p className="title">My Cart : </p>
                            <span className="quanlity_items">5 items</span>
                        </div>
                        <Box marginTop={1} marginBottom={2}><Divider /></Box>
                        <Grid container spacing={2}>
                            {listItemProduct.map(item => {
                                return (
                                    <CartItem item={item} key={item.id}/>
                                )
                            })}
                        </Grid>
                        <div className="cart_product-footer">
                            <span>Update Cart</span>
                            <span>Cotinue Shopping</span>
                            <span>Delete Cart</span>
                        </div>
                        <Box marginY={2.5}><Divider /></Box>
                    </Grid>
                    <Grid item md={3}>
                        <div className="bill">
                            <Box marginTop={1} marginBottom={2}><Divider /></Box>
                            <div className="total">
                                <span>Sub Total: </span>
                                <span>$235.00 USD</span>
                            </div>
                            <Box marginY={2}><Divider /></Box>
                            <p className="title">Shipping Info</p>
                            <p>Country</p>
                            <select className="input_form">
                                <option>Brasil</option>
                                <option>England</option>
                                <option>Singapore</option>
                                <option>Mexico</option>
                            </select>
                            <p style={{marginTop:"1rem"}}>Zip/Postal Code</p>
                            <input className="input_form" type="text" placeholder="Zip/Postal Code" />
                            <Box marginTop={5} marginBottom={2}><Divider /></Box>
                            <div className="total">
                                <span>Total: </span>
                                <span>$235.00 USD</span>
                            </div>
                            <Box marginY={2}><Divider /></Box>
                            <p className="check_out">
                                <span>CheckOut</span>
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
export default Cart