import React, { useState } from "react";
import "./index.scss"
import { useParams } from "react-router";
import Nav from "../../../components/Nav";
import {Box, Grid, Divider} from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image1 from "../../../assets/images/product_fresh_blueberry1.jpg";
import Image2 from "../../../assets/images/product_fresh_blueberry2.jpg";
import Image3 from "../../../assets/images/product_fresh_blueberry3.jpg";
import Image4 from "../../../assets/images/product_fresh_blueberry4.jpg";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom'


const ProductItem = (props) => {
    const { item } = useParams();
    console.log(item);
    const [quanlityItem, setQuanlityItem] = useState(1);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          }
        ]
    };
    const listSmallImage = [
        {
            id:1,
            image: Image1
        },
        {
            id:2,
            image: Image2
        },
        {
            id:3,
            image: Image3
        },
        {
            id:4,
            image: Image4
        },
        {
            id:5,
            image: Image2
        },
        {
            id:6,
            image: Image3
        },
        {
            id:7,
            image: Image1
        },

    ]
    const listSize = [
        {
            id:1,
            size:1
        },
        {
            id:2,
            size:2
        },
        {
            id:3,
            size:3
        }
    ]
    const listMaterial = [
        {
            id:1,
            material: "CANADA"
        },
        {
            id:2,
            material: "USA"
        },
        {
            id:3,
            material: "CHINA"
        }
    ]
    const [bigImage, setBigImage] = useState(listSmallImage[0].image);

    return (
        <div className="product_item">
            <Nav namePage={item}/>
            <Box className="box_container--page">
                <Grid container spacing={2}>
                    <Grid item lg={5} md={6} xs={12}>
                        <InnerImageZoom 
                            src={bigImage} 
                            className="big_img"
                            zoomType="hover"
                            zoomPreload={true}
                        />
                        <Slider {...settings}>
                            {listSmallImage.map(item => {
                                return (
                                    <div 
                                        key={item.id} 
                                        className={`small_img ${bigImage === item.image ? "active" : ""}`}
                                        onClick={() => setBigImage(item.image)}
                                    >
                                        <img src={item.image} alt="item_image" />
                                    </div>
                                )
                            })}
                        </Slider>
                    </Grid>
                    <Grid item lg={7} md={6} xs={12}>
                        <div className="info_product">
                            <h4 className="name">Fresh BlueBerry</h4>
                            <p className="avaiable"> 
                                <span id="title">Avaiablity :</span>
                                <span className="status">Out of Stock</span>
                            </p>
                            <span className="price_prd">
                                <span className="sale_price">$35.00 USD</span>
                                <span className="real_price">$51.00 USD</span>
                            </span>
                            <ul className="counter">
                                <li>
                                    <p>41</p>
                                    <p>Day</p> 
                                </li>
                                <li>
                                    <p>20</p>
                                    <p>Hrs</p>
                                </li>
                                <li>
                                    <p>12</p>
                                    <p>Mins</p>
                                </li>
                                <li>
                                    <p>45</p>
                                    <p>Secs</p> 
                                </li>
                            </ul>
                            <p className="desc_prd">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                            </p>
                            <div className="list-size_prd">
                                <span id="title">Size :</span>
                                <>
                                {listSize.map(item => {
                                    return(
                                        <span className="size option" key={item.id}>{`${item.size} KG`}</span>
                                    )
                                })}
                                </>
                            </div>
                            <div className="list-material_prd">
                                <span id="title">Material :</span>
                                <>
                                {listMaterial.map(item => {
                                    return(
                                        <span className="material option" key={item.id}>{item.material}</span>
                                    )
                                })}
                                </>
                            </div>
                            <div className="quanlity">
                                <span id="title">Quanlity :</span>
                                <span 
                                    className="descrease"
                                    onClick={() => {
                                        if(quanlityItem > 1) {
                                            setQuanlityItem(+quanlityItem - 1)
                                        }
                                    }}
                                >-</span>
                                <input 
                                    type="number" 
                                    min={1} 
                                    value={quanlityItem} 
                                    onChange={(e) => setQuanlityItem(e.target.value)}
                                />
                                <span 
                                    className="increase"
                                    onClick={() => setQuanlityItem(+quanlityItem + 1)}
                                >+</span>
                            </div>
                            <div className="list_action-btn">
                                <span className="btn">heart</span>
                                <span className="btn">ADD TO CART</span>
                                <span className="btn">BUY NOW</span>
                            </div>
                            <Divider />
                            <p className="code">
                                <span>Product code:</span>
                                <span>786-20-01</span>
                            </p>
                            <p className="social">
                                <span>Share:</span>
                                <ul>
                                    <li>FB</li>
                                </ul>
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
export default ProductItem;