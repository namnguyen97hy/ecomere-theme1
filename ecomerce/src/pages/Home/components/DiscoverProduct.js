import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Product from "./../../../components/Product";
import { listItemTest } from "../../../constants/const";


const DiscoverProducts = (props) => {
    const [isShowQuickView, setShowQuickView] = useState(false);
    const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          top:'50%',
          left:'50%',
          transform:'translate(-50%,-50%)',
          width: '45%',
          outline:'none',
          backgroundColor: 'white',
          border: 'none',
          borderRadius:"3px",
          padding: '1rem 1.5rem',
          overflowX:"hidden"
        },
        header: {
            display:"flex",
            justifyContent:"space-between",
        },
        divider: {
            height:'1.5px',
            marginTop:'1rem',
            background:'#333333'
        },
        info: {
            
        },
        price :{
            fontWeight:"500",
        }
    }));
    const classes = useStyles();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
            breakpoint: 600,
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
        <div className="discoverPrd">
            <h3>Discover Products</h3>
            <div className="listTypePrd">
                <span className="typePrd">ORAGANIC DRYFRUITS</span>
                <span className="typePrd">FRESH MEAT</span>
                <span className="typePrd">GREEN SEAFOOD</span>
            </div>
            <div className="listItem"> 
                <Slider {...settings}>
                    {listItemTest.map(itemPrd => {
                        return (
                            <div className="items" key={Math.random()} style={{display:"flex", flexDirection:"column"}}>
                                <Product product={itemPrd[0]}/>
                                <Product product={itemPrd[1]}/>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}
export default DiscoverProducts;