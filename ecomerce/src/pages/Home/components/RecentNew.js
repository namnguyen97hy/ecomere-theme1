import { Grid } from "@material-ui/core";
import React from "react";
import ImageNews1 from "./../../../assets/images/new_img1.jpg";
import ImageNews2 from "./../../../assets/images/new_img2.jpg";
import ImageNews3 from "./../../../assets/images/new_img3.jpg";
import ImageNews4 from "./../../../assets/images/new_img4.jpg";
import ImageNews5 from "./../../../assets/images/new_img5.jpg";
import ImageNews6 from "./../../../assets/images/new_img6.jpg";
import ImageNews7 from "./../../../assets/images/new_img7.jpg";
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const RecentNew = (props) => {
    const testListNews = [
        {
            id:1,
            image: ImageNews1,
            title: "Green Onion Knife and Salad placed",
            content: "Great theme! and more than this If you need help with anything, these guys got your back."
        },
        {
            id:2,
            image: ImageNews2,
            title: "Healthy and skins for organic",
            content: "Great theme! and more than this If you need help with anything, these guys got your back."
        },
        {
            id:3,
            image: ImageNews3,
            title: "Fresh Organic brand and picnic",
            content: "Great theme! and more than this If you need help with anything, these guys got your back."
        },
        {
            id:4,
            image: ImageNews4,
            title: "Mix salad good for your health",
            content: "Great theme! and more than this If you need help with anything, these guys got your back."
        },
        {
            id:5,
            image: ImageNews5,
            title: "Green Onion Knife and Salad placed",
            content: "Great theme! and more than this If you need help with anything, these guys got your back."
        },
        {
            id:6,
            image: ImageNews6,
            title: "Green Onion Knife and Salad placed",
            content: "Great theme! and more than this If you need help with anything, these guys got your back."
        },
        {
            id:7,
            image: ImageNews7,
            title: "Healthy and skins for organic",
            content: "Great theme! and more than this If you need help with anything, these guys got your back."
        }

    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1026,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <div className="news">
            <h3>Recent News</h3>
            
            <Slider {...settings}>
                {testListNews.map(item => {
                    return (
                        <div className="news_item" key={item.id}>
                            <div className="image_news">
                                <img src={item.image} alt="imageNews" />
                            </div>
                            <h4 className="title_news">{item.title}</h4>
                            <p className="content_news">{item.content} </p>
                            <p className="more">
                                Read More
                                <span>
                                    <ArrowForwardOutlinedIcon />
                                </span>
                            </p>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
export default RecentNew