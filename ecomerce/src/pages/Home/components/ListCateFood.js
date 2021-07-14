import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ImageCate1 from "./../../../assets/images/categories_1.jpg";
import ImageCate2 from "./../../../assets/images/categories_2.jpg";
import ImageCate3 from "./../../../assets/images/categories_3.jpg";
import ImageCate4 from "./../../../assets/images/categories_4.jpg";
import { useHistory } from "react-router-dom"


const ListCateFood = (props) => {
    const listCateFood = [
        {id:1, imageCate: ImageCate1, quanlity: 20, nameCate:"fresh fruits" },
        {id:2, imageCate: ImageCate2, quanlity: 25, nameCate:"fresh vegetable" },
        {id:3, imageCate: ImageCate3, quanlity: 30, nameCate:"fresh meat" },
        {id:4, imageCate: ImageCate4, quanlity: 35, nameCate:"fresh organic" },
        {id:3, imageCate: ImageCate3, quanlity: 30, nameCate:"fresh meat" },
        {id:4, imageCate: ImageCate4, quanlity: 35, nameCate:"fresh organic" },
    ]
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
    const history = useHistory()

    return (
        <div className="listCate">
            <Slider {...settings}> 
                 {listCateFood.map(item => {
                    return (
                    <div className="cate_item" key={item.id} onClick={() => history.push(`/page/collections/${item.nameCate}`)}>
                        <div className="info">
                            <img src={item.imageCate} />
                            <span className="quanlity" >{`${item.quanlity} items`}</span>
                        </div>
                        <button className="btn">
                            {(item.nameCate).toUpperCase()}
                        </button>
                    </div>
                    )
                })} 
            </Slider> 
        </div>
    )
}
export default ListCateFood