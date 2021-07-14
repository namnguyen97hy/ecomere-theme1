import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getListProduct } from "../redux/productSlice";
import Product from "./../../../components/Product";


const DiscoverProducts = (props) => {
    const {listProduct} = props;
    const dispatch = useDispatch();
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
    const [typePrd, setTypePrd] = useState("dryFruits")
    useEffect(() => {
      dispatch(getListProduct());
      
    },[])

    // convert listItem to listItemCarousel
    const listRenderProduct = listProduct.filter((item,index) => item.type === typePrd);
    const listProductDiscover = [];
    let i = 0;
    while(i < listRenderProduct.length) {
      listProductDiscover.push([listRenderProduct[i],listRenderProduct[i+1]]);
      i+=2;
    }

    return (
        <div className="discoverPrd">
            <h3>Discover Products</h3>
            <div className="listTypePrd">
                <span className="typePrd" id={typePrd === "dryFruits" ? "active" : ""} onClick={() => setTypePrd("dryFruits")}>ORAGANIC DRYFRUITS</span>
                <span className="typePrd" id={typePrd === "freshMeat" ? "active" : ""} onClick={() => setTypePrd("freshMeat")}>FRESH MEAT</span>
                <span className="typePrd" id={typePrd === "seaFood" ? "active" : ""} onClick={() => setTypePrd("seaFood")}>GREEN SEAFOOD</span>
            </div>
            <div className="listItem"> 
                <Slider {...settings}>
                    {listProductDiscover.map(itemPrd => {
                        return (
                            <div className="items" key={Math.random()} style={{display:"flex", flexDirection:"column"}}>
                                <Product product={itemPrd[0]}/>
                                <Product product={itemPrd[1]}/>
                            </div>
                        )
                    })}
                    {/* {listProduct.map((itemPrd,index) => {
                     return (
                        <div className="items" >
                          <Product product={itemPrd} />
                        </div>
                      )
                    })}  */}
                </Slider>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
  return {
    listProduct: state.product.listProduct
  }
}

export default connect(mapStateToProps, null) (DiscoverProducts);