import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import Image1 from "./../../assets/images/banner_top.jpg";
import Image2 from "./../../assets/images/banner_top_2.jpg";
import Image3 from "./../../assets/images/banner_top3.jpg";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = (props) => {
    const listBanner = [
        {typeFood:"Fresh Fruits",nameFood:{bold:"Organic Fruits",normal:"& Healthy Tasty"}, backgroundImage:Image1},
        {typeFood:"Fresh Vegetables",nameFood:{bold:"Organic Vegetable",normal:"& Good For Health"}, backgroundImage:Image2},
        {typeFood:"Top selling",nameFood:{bold:"Fresh juice",normal:"& Detox"}, backgroundImage:Image3}
    ]
    return (
        <div className="list_banner">
            <Carousel prevLabel="" nextLabel="" pause="hover" slide="false" interval="5000" >
                {listBanner.map(item => {
                    return (
                        <Carousel.Item>
                            <div className="banner">
                                <div className="banner_item" style={{backgroundImage:`url("${item.backgroundImage}")`}}>
                                    <div className="banner_item--content" >
                                        <p className="type_food">
                                            {item.typeFood}
                                        </p>
                                        <div className="name_food">
                                            <h2 className="bold">{item.nameFood.bold}</h2>
                                            <h2 className="normal">{item.nameFood.normal}</h2>
                                        </div>
                                        <ButtonPrimary content="SHOP NOW"/>
                                    </div>
                                </div>  
                            </div>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}
export default Banner;