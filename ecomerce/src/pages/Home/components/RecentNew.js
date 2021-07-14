import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getListRecentNews } from "../redux/recentNewSlice";

const RecentNew = (props) => {
    const {listRecentNews} = props;
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
    const history = useHistory();
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getListRecentNews())
    },[])
    return (
        <div className="news">
            <h3>Recent News</h3>
            
            <Slider {...settings}>
                {listRecentNews.map(item => {
                  const path = item.title.toLowerCase().split(' ').join("-");
                    return (
                        <div className="news_item" key={item.id}>
                            <div className="image_news">
                                <img src={item.recentNewsImg} alt="imageNews" onClick={() => history.push(`/page/blog/news/${path}`)} />
                            </div>
                            <h4 className="title_news" onClick={() => history.push(`/page/blog/news/${path}`)}>{item.title}</h4>
                            <p className="content_news">{item.firstText.substring(0,80).concat(" ...")} </p>
                            <p className="more" onClick={() => history.push(`/page/blog/news/${path}`)}>
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
const mapStateToProps = (state) => {
  return {
    listRecentNews : state.recentNews.listRecentNews
  }
}
export default connect(mapStateToProps, null)(RecentNew)