import { Grid } from "@material-ui/core";
import React from "react";
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { testListNews } from "../../../constants/const";

const RecentNew = (props) => {

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