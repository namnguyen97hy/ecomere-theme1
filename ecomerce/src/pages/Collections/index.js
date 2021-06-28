import React from "react";
import { useHistory } from "react-router-dom";
import {Box, Grid } from "@material-ui/core";
import Nav from "./../../components/Nav";
import Image1 from "./../../assets/images/collect_menu_1.jpg"
import Image2 from "./../../assets/images/collect_menu_2.jpg"
import Image3 from "./../../assets/images/collect_menu_3.jpg"
import Image4 from "./../../assets/images/collect_menu_4.jpg"
import Image5 from "./../../assets/images/collect_menu_5.jpg"
import Image6 from "./../../assets/images/collect_menu_6.jpg"
import Image7 from "./../../assets/images/collect_menu_7.jpg"
import Image8 from "./../../assets/images/collect_menu_8.jpg"
import Image9 from "./../../assets/images/collect_menu_9.jpg"
import Image10 from "./../../assets/images/collect_menu_10.jpg"
import Image11 from "./../../assets/images/collect_menu_11.jpg"
import Image12 from "./../../assets/images/collect_menu_12.jpg"
import Image13 from "./../../assets/images/collect_menu_13.jpg"
import Image14 from "./../../assets/images/collect_menu_14.jpg"
import Image15 from "./../../assets/images/collect_menu_15.jpg"
import Image16 from "./../../assets/images/collect_menu_16.jpg"
import "./index.scss"

const Collections = (props) => {
    const history = useHistory();
    const testDataCollection = [
        {   
            id:1,
            image: Image1,
            name: "Baker's Rak",
            quanlity: 14
        },
        {   
            id:2,
            image: Image2,
            name: "Breakfast",
            quanlity: 12
        },
        {   
            id:3,
            image: Image3,
            name: "Dairy and cheese",
            quanlity: 13
        },
        {   
            id:4,
            image: Image4,
            name: "Fruits",
            quanlity: 15
        },
        {   
            id:5,
            image: Image5,
            name: "Beverage",
            quanlity: 11
        },
        {   
            id:6,
            image: Image6,
            name: "Meat and fish",
            quanlity: 23
        },
        {   
            id:7,
            image: Image7,
            name: "Beef Kokobe",
            quanlity: 14
        },
        {   
            id:8,
            image: Image8,
            name: "Baker's Rak",
            quanlity:9 
        },
        {   
            id:9,
            image: Image9,
            name: "Juice",
            quanlity: 14
        },
        {   
            id:10,
            image: Image10,
            name: "Detox water",
            quanlity: 78
        },
        {   
            id:11,
            image: Image11,
            name: "Palcon",
            quanlity: 12
        },
        {   
            id:12,
            image: Image12,
            name: "Seafood",
            quanlity: 33
        },
        {   
            id:13,
            image: Image13,
            name: "Baker's Rak",
            quanlity: 18
        },
        {   
            id:14,
            image: Image14,
            name: "Vegetable",
            quanlity: 45
        },
        {   
            id:15,
            image: Image15,
            name: "Chicken ",
            quanlity: 23
        },
        {   
            id:16,
            image: Image16,
            name: "Rice and Noodle",
            quanlity: 24
        },
    ]
    return (
        <div className="collections">
            <Nav namePage="Collections" />
            <Box className="box_container--page">
                <Grid container spacing={3}>
                    {testDataCollection.map(item => {
                        return (
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <div className="collections_item" key={item.id}>
                                    <img src={item.image} alt="image_collec_item" />
                                    <span className="info">
                                        <p className="name">{item.name}</p>
                                        <p className="quanlity">{`(${item.quanlity}) item`}</p>
                                        <span className="shop_btn" onClick={() => history.push(`/page/collections/${item.name}`)}>
                                            Shop Now
                                        </span>
                                    </span>
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>

        </div>
    )
}
export default Collections