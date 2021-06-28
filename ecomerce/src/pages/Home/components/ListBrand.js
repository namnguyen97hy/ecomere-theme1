import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import brandImg1 from "./../../../assets/images/brand1.png";
import brandImg2 from "./../../../assets/images/brand2.png";
import brandImg3 from "./../../../assets/images/brand3.png";
import brandImg4 from "./../../../assets/images/brand4.png";
import brandImg5 from "./../../../assets/images/brand5.png";

const ListBrands = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 5,
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
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
    };
    const testListBrands = [
        {
            id:1,
            image: brandImg1
        },
        {
            id:2,
            image: brandImg2
        },
        {
            id:3,
            image: brandImg3
        },
        {
            id:4,
            image: brandImg4
        },
        {
            id:5,
            image: brandImg5
        },
        {
            id:6,
            image: brandImg3
        },
        {
            id:7,
            image: brandImg1
        },
        {
            id:8,
            image: brandImg2
        },
    ]
    return (
        <div className="listBrands">
            <Slider {...settings}>
                {testListBrands.map(item => {
                    return (
                        <div className="brand_item" key={item.id} >
                            <img src={item.image} alt="img_brand" />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
export default ListBrands