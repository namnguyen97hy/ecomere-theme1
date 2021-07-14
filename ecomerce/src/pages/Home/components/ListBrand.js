import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getListBrands } from "../redux/brandSlice";

const ListBrands = (props) => {
    const dispatch = useDispatch();
    const {listBrands} = props;
    useEffect(() => {
        dispatch(getListBrands())
    },[])
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
   
    return (
        <div className="listBrands">
            <Slider {...settings}>
                {listBrands.map(item => {
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
const mapStateToProps = (state) => {
    return {
        listBrands : state.brands.listBrands
    }
}
export default connect(mapStateToProps, null)(ListBrands)