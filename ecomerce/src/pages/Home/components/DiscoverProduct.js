import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import imagePrd1 from "./../../../assets/images/item1.jpg";
import imagePrd10 from "./../../../assets/images/item10.jpg";
import imagePrd2 from "./../../../assets/images/item2.jpg";
import imagePrd3 from "./../../../assets/images/item3.jpg";
import imagePrd4 from "./../../../assets/images/item4.jpg";
import imagePrd5 from "./../../../assets/images/item5.jpg";
import imagePrd6 from "./../../../assets/images/item6.jpg";
import imagePrd7 from "./../../../assets/images/item7.jpg";
import imagePrd8 from "./../../../assets/images/item8.jpg";
import imagePrd9 from "./../../../assets/images/item9.jpg";
import Product from "./../../../components/Product";

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
    // test data
    const listItemTest = [
        [
            {
                type:"dryFruits",
                images: {up: imagePrd1, down: imagePrd2},
                name:"Healthy Papaya ",
                price: 66, 
                salePercent: 10,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                listSize: [1,2,3],
                star: 4,
                reviewr: 2,
                listMaterial: ["Canada","USA","Japan"]
            },
            {
                type:"dryFruits",
                images: {up: imagePrd3, down: imagePrd4},
                name:"Fresher Apple",
                price: 76, 
                salePercent: 10,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                listSize: [2,3,4],
                star: 3,
                reviewr: 3,
                listMaterial: ["China","Australiar","Japan"]
            }
        ],
        [
            {
                type:"dryFruits",
                images: {up: imagePrd5, down: imagePrd6},
                name:"Lemon Sweet",
                price: 90, 
                salePercent: 10,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                listSize: [0.5,1,2],
                star: 2,
                reviewr: 1,
                listMaterial: ["VietNam","USA","Japan"]
            },
            {
                type:"dryFruits",
                images: {up: imagePrd7, down: imagePrd8},
                name:"Fresher WaterLemon",
                price: 72, 
                salePercent: 10,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                listSize: [1,3,5],
                star: 5,
                reviewr: 2,
                listMaterial: ["China","ThaiLand","Japan"]
            }
        ],
        [
            {
                type:"dryFruits",
                images: {up: imagePrd9, down: imagePrd10},
                name:"Lemon Sweet",
                price: 90, 
                salePercent: 10,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                listSize: [0.5,1,2],
                star: 5,
                reviewr: 4,
                listMaterial: ["VietNam","USA","Japan"]
            },
            {
                type:"dryFruits",
                images: {up: imagePrd1, down: imagePrd8},
                name:"Fresher WaterLemon",
                price: 72, 
                salePercent: 10,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                listSize: [1,3,5],
                star: 2,
                reviewr: 4,
                listMaterial: ["China","ThaiLand","Japan"]
            }
        ],
        [
            {
                type:"dryFruits",
                images: {up: imagePrd4, down: imagePrd3},
                name:"Lemon Sweet",
                price: 90, 
                salePercent: 10,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                listSize: [0.5,1,2],
                star: 3,
                reviewr: 2,
                listMaterial: ["VietNam","USA","Japan"]
            },
            {
                type:"dryFruits",
                images: {up: imagePrd6, down: imagePrd5},
                name:"Fresher WaterLemon",
                price: 72, 
                salePercent: 10,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                listSize: [1,3,5],
                star: 2,
                reviewr: 3,
                listMaterial: ["China","ThaiLand","Japan"]
            }
        ],
        [
            {
                type:"dryFruits",
                images: {up: imagePrd2, down: imagePrd1},
                name:"Lemon Sweet",
                price: 90, 
                salePercent: 10,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                listSize: [0.5,1,2],
                star: 4,
                reviewr: 1,
                listMaterial: ["VietNam","USA","Japan"]
            },
            {
                type:"dryFruits",
                images: {up: imagePrd6, down: imagePrd8},
                name:"Fresher WaterLemon",
                price: 72, 
                salePercent: 10,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                listSize: [1,3,5],
                star: 4,
                reviewr: 5,
                listMaterial: ["China","ThaiLand","Japan"]
            }
        ],
        [
            {
                type:"dryFruits",
                images: {up: imagePrd9, down: imagePrd10},
                name:"Lemon Sweet",
                price: 90, 
                salePercent: 10,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                listSize: [0.5,1,2],
                star: 3,
                reviewr: 6,
                listMaterial: ["VietNam","USA","Japan"]
            },
            {
                type:"dryFruits",
                images: {up: imagePrd1, down: imagePrd8},
                name:"Fresher WaterLemon",
                price: 72, 
                salePercent: 10,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                listSize: [1,3,5],
                star: 2,
                reviewr: 8,
                listMaterial: ["China","ThaiLand","Japan"]
            }
        ],
        [
            {
                type:"dryFruits",
                images: {up: imagePrd4, down: imagePrd3},
                name:"Lemon Sweet",
                price: 90, 
                salePercent: 10,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                listSize: [0.5,1,2],
                star: 3,
                reviewr: 5,
                listMaterial: ["VietNam","USA","Japan"]
            },
            {
                type:"dryFruits",
                images: {up: imagePrd6, down: imagePrd5},
                name:"Fresher WaterLemon",
                price: 72, 
                salePercent: 10,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                listSize: [1,3,5],
                star: 3,
                reviewr: 5,
                listMaterial: ["China","ThaiLand","Japan"]
            }
        ],
        [
            {
                type:"dryFruits",
                images: {up: imagePrd2, down: imagePrd1},
                name:"Lemon Sweet",
                price: 90, 
                salePercent: 10,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                listSize: [0.5,1,2],
                star: 3,
                reviewr: 5,
                listMaterial: ["VietNam","USA","Japan"]
            },
            {
                type:"dryFruits",
                images: {up: imagePrd6, down: imagePrd8},
                name:"Fresher WaterLemon",
                price: 72, 
                salePercent: 10,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                listSize: [1,3,5],
                star: 3,
                reviewr: 3,
                listMaterial: ["China","ThaiLand","Japan"]
            }
        ]
    ]

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